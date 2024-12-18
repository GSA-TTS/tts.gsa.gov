const fs = require('fs');
const path = require('path');

// Directory where markdown files are stored
const archiveDir = './pages/jointts/positions/archive';

// Get all markdown files in the directory
const mdFiles = fs.readdirSync(archiveDir).filter(file => file.endsWith('.md'));

// Map each markdown file to a redirect
module.exports = mdFiles.map(file => {
  return {
    permalink: `/pages/jointts/positions/archive/${file.replace('.md', '.html')}`,  // The original page URL
    redirectTo: '/join/',  // The target for the redirect
  };
});
