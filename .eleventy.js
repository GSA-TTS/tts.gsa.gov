const { DateTime } = require("luxon");
const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const yaml = require("js-yaml");
const { sassPlugin } = require("esbuild-sass-plugin");
const svgSprite = require("eleventy-plugin-svg-sprite");
const {
  isValidGitBranch,
  isValidTwitterHandle,
  isValidDapAgency,
  isValidAnalyticsId,
  isValidSearchKey,
  isValidSearchAffiliate,
  isValidVerificationToken,
  uswdsIconWithSize,
  numberWithCommas,
  sortByProp,
  readableDate,
  getStateFromDates,
  htmlDateString,
  minNumber,
  uswdsIcon,
  imageWithClassShortcode,
} = require("./js/global.js");

require("dotenv").config();

module.exports = function (config) {
  config.setFreezeReservedData(false);
  // Set pathPrefix for site
  let pathPrefix = "/";

  // for #80 (update site favicon)
  // copy files from `_img/favicon/` to `_site/`
  config.addPassthroughCopy({ "_img/favicon/": "/assets/" });

  // copy files from `_img/webp/` to `_site/`
  config.addPassthroughCopy({ "_img/webp/": "/assets/" });

  // Copy USWDS init JS so we can load it in HEAD to prevent banner flashing
  config.addPassthroughCopy({
    "./node_modules/@uswds/uswds/dist/js/uswds-init.js":
      "assets/js/uswds-init.js",
  });

  // Add plugins
  config.addPlugin(pluginRss);
  config.addPlugin(pluginNavigation);

  //// SVG Sprite Plugin for USWDS USWDS icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/uswds-icons",
    svgSpriteShortcode: "uswds_icons_sprite",
    svgShortcode: "uswds_icons",
  });

  //// SVG Sprite Plugin for USWDS USA icons
  config.addPlugin(svgSprite, {
    path: "./node_modules/@uswds/uswds/dist/img/usa-icons",
    svgSpriteShortcode: "usa_icons_sprite",
    svgShortcode: "usa_icons",
  });

  // Allow yaml to be used in the _data dir
  config.addDataExtension("yaml, yml", (contents) => yaml.load(contents));

  // This is an example of creating an Eleventy collection from
  // a data file, in this case it's _data/services.yml
  config.addCollection("services", (collection) => {
    const allServices = collection.getAll()[0].data.services;
    return allServices;
  });

  // This gives us a filter, based on BASEURL which we get from
  // either the environment (thanks to Cloud.gov Pages) or a
  // .env file, which we can use to convert relative URLs to
  // absolute URLs

  const { hosts } = yaml.load(fs.readFileSync("./_data/site.yaml", "utf8"));

  if (process.env.BRANCH && isValidGitBranch(process.env.BRANCH)) {
    switch (process.env.BRANCH) {
      case "main":
        baseUrl = new URL(hosts.live).href.replace(/\/$/, "");
        break;
      default:
        baseUrl = new URL(hosts.preview).href.replace(/\/$/, "");
        break;
    }
  } else {
    baseUrl = new URL(hosts.undefined).href.replace(/\/$/, "");
  }

  // If BASEURL env variable exists, update pathPrefix to the BASEURL
  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  config.addGlobalData("baseUrl", baseUrl);
  config.addGlobalData("site.baseUrl", baseUrl);

  if (process.env.TWITTER && isValidTwitterHandle(process.env.TWITTER)) {
    config.addGlobalData("site.twitter", process.env.TWITTER);
  }

  if (process.env.DAP_AGENCY && isValidDapAgency(process.env.DAP_AGENCY)) {
    config.addGlobalData("site.dap.agency", process.env.DAP_AGENCY);
  }

  if (
    process.env.DAP_SUBAGENCY &&
    isValidDapAgency(process.env.DAP_SUBAGENCY)
  ) {
    config.addGlobalData("site.dap.subagency", process.env.DAP_SUBAGENCY);
  }

  if (process.env.GA && isValidAnalyticsId(process.env.GA)) {
    config.addGlobalData("site.ga", process.env.GA);
  }

  // Search access key.
  if (
    process.env.SEARCH_ACCESS_KEY &&
    isValidSearchKey(process.env.SEARCH_ACCESS_KEY)
  ) {
    config.addGlobalData("site.access_key", process.env.SEARCH_ACCESS_KEY);
  }

  // Search affiliate token.
  if (
    process.env.SEARCH_AFFILIATE &&
    isValidSearchAffiliate(process.env.SEARCH_AFFILIATE)
  ) {
    config.addGlobalData("site.affiliate", process.env.SEARCH_AFFILIATE);
  }

  // Google verification token.
  if (
    process.env.GOOGLE_VERIFICATION_TOKEN &&
    isValidVerificationToken(process.env.GOOGLE_VERIFICATION_TOKEN)
  ) {
    config.addGlobalData(
      "site.google_verification_token",
      process.env.GOOGLE_VERIFICATION_TOKEN,
    );
  }

  config.addFilter("sortByProp", sortByProp);
  config.addFilter("readableDate", readableDate);
  config.addFilter("htmlDateString", htmlDateString);
  config.addFilter("min", minNumber);
  config.addFilter("numberWithCommas", numberWithCommas);
  config.addLiquidShortcode("image_with_class", imageWithClassShortcode);
  config.addLiquidShortcode("uswds_icon", uswdsIcon);
  config.addLiquidShortcode("uswds_icon_with_size", uswdsIconWithSize);
  config.addLiquidShortcode("getStateFromDates", getStateFromDates);

  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  }).use(markdownItAnchor, {
    level: [1, 2, 3, 4],
    slugify: config.getFilter("slug"),
    tabIndex: "0",
  });
  config.setLibrary("md", markdownLibrary);

  // Create a Markdown parser instance
  const markdownLib = markdownIt({ html: true });

  // Add the markdown filter
  config.addFilter("markdown", (content) => {
    return markdownLib.render(content);
  });

  // Override Browsersync defaults (used only with --serve)
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("_site/404/index.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    dataTemplateEngine: "liquid",

    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ["md", "njk", "html", "liquid"],

    // Pre-process *.md files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    markdownTemplateEngine: "liquid",

    // Pre-process *.html files with: (default: `liquid`)
    // Other template engines are available
    // See https://www.11ty.dev/docs/languages/ for other engines.
    htmlTemplateEngine: "liquid",

    // -----------------------------------------------------------------
    // If your site deploys to a subdirectory, change `pathPrefix`.
    // Don’t worry about leading and trailing slashes, we normalize these.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.dev/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`

    // Optional (default is shown)
    pathPrefix: pathPrefix,
    // -----------------------------------------------------------------

    // These are all optional (defaults are shown):
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
