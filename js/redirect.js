const fs = require('fs');
const path = require('path');

const archiveDir = './pages/jointts/positions/archive';

const mdFiles = fs.readdirSync(archiveDir).filter(file => file.endsWith('.md'));

module.exports = mdFiles.map(file => ({
  permalink: `/pages/jointts/positions/archive/${file.replace('.md', '.html')}`,
  redirectTo: '/join/',
}));
