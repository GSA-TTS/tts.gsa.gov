const fs = require("fs/promises");
const path = require("path");
const esbuild = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

async function copyImagesToAssets() {
  const sourceDir = path.join(__dirname, "../pages/updates/posts/images");
  const destinationDir = path.join(__dirname, "../_site/assets");

  try {
    const files = await fs.readdir(sourceDir, { withFileTypes: true });

    for (const file of files) {
      if (file.isFile()) {
        const ext = path.extname(file.name).toLowerCase();
        if ([".png", ".jpg", ".jpeg", ".svg"].includes(ext)) {
          const sourcePath = path.join(sourceDir, file.name);
          const destinationPath = path.join(destinationDir, file.name);

          await fs.copyFile(sourcePath, destinationPath);
          console.log(`Copied: ${file.name}`);
        }
      }
    }
  } catch (err) {
    console.error("Error copying images to assets:", err);
  }
}

async function createAssetPaths() {
  let pathPrefix = "";

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  const assetPath = path.join(__dirname, "../_site/assets");
  let assetDirs = await fs.readdir(assetPath, { withFileTypes: true });
  assetDirs = assetDirs
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  const assetsFiles = await Promise.all(
    assetDirs.map(async (dir) => {
      const files = await fs.readdir(
        // nosemgrep: javascript.lang.security.audit.path-traversal.path-join-resolve-traversal.path-join-resolve-traversal
        path.join(__dirname, "../_site/assets", dir),
      );
      return files.map((file) => {
        const { name, ext } = path.parse(file);
        const hashedAt = name.lastIndexOf("-");
        const originalName = name.slice(0, hashedAt);
        const key = `${originalName}${ext}`;
        return {
          [key]: `${pathPrefix}/assets/${dir}/${file}`,
        };
      });
    }),
  );
  const assets = Object.assign({}, ...assetsFiles.flat());
  const outputData = path.join(__dirname, "../_data/assetPaths.json");

  return await fs.writeFile(outputData, JSON.stringify(assets, null, 2));
}

esbuild
  .build({
    entryPoints: [
      "styles/styles.scss",
      "js/app.js",
      "js/admin.js",
      "js/subnav.js",
      "js/positions.js",
    ],
    entryNames: "[dir]/[name]-[hash]",
    outdir: "_site/assets",
    format: "iife",
    loader: {
      ".png": "file",
      ".jpg": "file",
      ".jpeg": "file",
      ".svg": "file",
      ".ttf": "file",
      ".woff": "file",
      ".woff2": "file",
    },
    minify: process.env.ELEVENTY_ENV === "production",
    sourcemap: process.env.ELEVENTY_ENV !== "production",
    target: ["chrome58", "firefox57", "safari11", "edge18"],
    bundle: true,
    plugins: [
      sassPlugin({
        loadPaths: [
          "./node_modules/@uswds",
          "./node_modules/@uswds/uswds/packages",
        ],
      }),
    ],
  })
  .then(() => copyImagesToAssets())
  .then(() => createAssetPaths())
  .then(() => {
    console.log("Building with entry points:", [
      "styles/styles.scss",
      "js/app.js",
      "js/admin.js",
      "js/subnav.js",
      "js/positions.js",
    ]);
    console.log("Assets have been built!");
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
