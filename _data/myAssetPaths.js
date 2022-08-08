const fs = require('fs');
const path = require('path');

module.exports = async function() {
    let pathPrefix = '';
    if (process.env.BASEURL) {
        pathPrefix = process.env.BASEURL
    }

    const assetPath = path.join(__dirname, '../_site/assets');
    const assetDirs = await fs.promises.readdir(assetPath, {withFileTypes: true});
    const assetFiles = await Promise.all(
        assetDirs.map(async (dir) => {
            if (dir.isDirectory()) {
                const files = await fs.promises.readdir(
                    path.join(__dirname, '../_site/assets', dir.name)
                );

                return files.map((file) => {
                    const {name, ext} = path.parse(file);
                    const hashedAt = name.lastIndexOf('-');
                    const originalName = name.slice(0, hashedAt);
                    const key = `${originalName}${ext}`;
                    return {
                        [key]: `${pathPrefix}/assets/${dir.name}/${file}`
                    }
                });
            }
        })
    );
    const assets = Object.assign({}, ...assetFiles.flat());
    const assetData = JSON.stringify(assets, null, 2);
    return assets
};
