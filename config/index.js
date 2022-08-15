const path = require('path');
const Image = require('@11ty/eleventy-img');

async function imageWithClassShortcode(
  src,
  cls,
  alt,
  containFit
) {
  let pathPrefix = '';
  let style;

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL
  }

  const ext = path.extname(src);
  const fileType = ext.replace('.', '');

  const metadata = await Image(src, {
    formats: [fileType],
    outputDir: './_site/img/',
  });

  const data = metadata[fileType] ? metadata[fileType][0] : metadata.jpeg[0];
 
  if (containFit) {
    style = 'style="object-fit:contain;"';
  }
  return `<img src="${pathPrefix}${data.url}" class="${cls}" alt="${alt}" loading="lazy" decoding="async" ${style}>`;
};


async function imageShortcode(src, alt) {
  return await imageWithClassShortcode(src, '', alt)
};

module.exports = {
  imageWithClassShortcode,
  imageShortcode
}
