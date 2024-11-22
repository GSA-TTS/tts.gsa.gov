# Technology Transformation Services website

This is the code for [tts.gsa.gov](https://tts.gsa.gov/).
Our tech stack in short is:

- [Eleventy (11ty)](https://www.11ty.dev/)
- [U.S. Web Design System v 3.0 (USWDS)](https://designsystem.digital.gov/)

This site strives to be compliant with requirements set by
[21st Century IDEA Act](https://www.meritalk.com/articles/senate-passes-idea-act/).

The standards require that a website or digital service:

- is accessible to individuals with disabilities;
- has a consistent appearance;
- does not duplicate any legacy websites (the legislation also requires
  agencies to ensure that legacy websites are regularly reviewed, removed,
  and consolidated);
- has a search function;
- uses an industry standard secure connection;
- is designed around user needs with data-driven analysis influencing
  management and development decisions, using qualitative and quantitative
  data to determine user goals, needs, and behaviors, and continually
  test the website, web-based form, web-based application, or digital
  service to ensure that user needs are addressed;
- allows for user customization; and
- is mobile-friendly.

## Getting Started

### Installing Dependencies

`npm install`

### Building the Assets

`npm run build`

### Running a Dev Instance

`npm run serve`

#### Accessing the Dev Instances

Point your browser to [http://localhost:3000/](http://localhost:3000/)

## How To

### Creating links

For preview links generated on the platform, we automatically set the
`pathPrefix` in the [`.eleventy.js`](./.eleventy.js) file base on the
`BASEURL` environment variable. We use the built-in 11ty filter for
`url` to properly append the prefix path for the linked page.
When adding new links, use the following syntax:

```liquid
<a href="{{ '/myDir/' | url }}">Link to My Dir</a>
```

See the [11ty docs](https://www.11ty.dev/docs/filters/url/)

### Referencing Images

All of your images will be stored in the `_img/` directory. To reference your
images in your templates you can use the `shortcodes` built into the template.

For referencing an image with a style class, you will pass the template
shortcode the image's source path, class names, and the alternative image name in
that order, i.e.,

```NJK
{% image_with_class "_img/my-image.png" "img-class another-class" "My PNG Image Alternative Name" %}
```

If the image does not have a style class, simply pass an empty string, i.e.,
```NJK
{% image_with_class "_img/my-image.png" "" "My PNG Image Alternative Name" %}
```

### Referencing USWDS Sprite Icons

USWDS has sprite icons available for use. Here is the
[list of icons](https://designsystem.digital.gov/components/icon/)
available when using the sprite shortcode `uswds_icon` in the template.
The following example is how you can reference the icon in a template.

```NJK
{% uswds_icon "<USWDS sprite name>" %}
```

### Expanding SCSS Styles

CSS and SASS can be added or imported into the `styles/styles.scss`.
This template uses [esbuild](https://esbuild.github.io/) and
[autoprefixer](https://github.com/postcss/autoprefixer) to bundle
your SASS/CSS and fingerprint the files in the site build.

### Asset pipeline / build process

`config/buildAssets.js` is initiated first when executing `npm run dev`.
This file initiates the esbuild build step which processes the SCSS and
JS files into the `outdir` which is currently `_site/assets`. Since
the esbuild `entryNames` config option template is set to
`'[dir]/[name]-[hash]'`, the asset files will have fingerprint IDs placed
on the end of the file names to assist with browser caching. Once the
esbuild build step is done, there's a call to a function whose job is
to look at any CSS or JavaScript file inside `_site/assets`, read its
hash ID, and write out key/value data to `_data/assetPaths.json`.
This key in this data is the filename of the asset and the value is the
full asset filename as it exists in `_site/assets`. An example of this would
be:

The function finds a file `_site/assets/styles/styles-C4XNB42.css`
and it ends up adding a key/value entry to `_data/assetPaths.json`
that reads: `"styles.css": "styles-C4XNB42.css"`.

We make use of this `_data/assetPaths.json` file in our templates,
namely `_includes/meta.html` and `_includes/scripts.html` to load
scripts and assets using a constant known name (such as `styles.css`)
and don't have to worry about updating those linkages each time the
content inside the assets causes the hash ID to change.

Once this function inside `config/buildAssets` is complete it returns
control to the esbuild build step when then concludes. The next step
is Eleventy begins its build step, looking at `.eleventy.js` for its
configuration. Once Eleventy has completed its build process, browsersync
begins serving the local repo and a plugin named `chokidar` along with
Eleventy's own watch targets begin watching for CSS/JS file changes or
changes to pages inside Eleventy, ready to hot reload when changes are
detected.

### Adding custom Javascript

Javascript can be added to the admin UI or site UI by adding or importing
code into the `js/admin.js` or `js/app.js` files respectively. This
template uses [esbuild](https://esbuild.github.io/) to bundle your
javascript and fingerprint the files in the site build.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md).
As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States,
> and copyright and related rights in the work worldwide are waived
> through the
> [CC0-1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the
> CC0-1.0 dedication. By submitting a pull request, you are
> agreeing to comply with this waiver of copyright interest.
