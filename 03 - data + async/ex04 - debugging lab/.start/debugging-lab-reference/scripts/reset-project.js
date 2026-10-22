const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

if (!fs.existsSync(srcDir)) {
  console.log('No src directory found. Nothing to reset.');
  process.exit(0);
}

console.log('This reference project is already in its lesson-ready state.');
