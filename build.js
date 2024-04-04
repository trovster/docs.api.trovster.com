const fs = require('fs');
const jsDir = './build/js';
const cssDir = './build/css';

if (! fs.existsSync(jsDir)) {
  fs.mkdirSync(jsDir, { recursive: true });
}

if (! fs.existsSync(cssDir)) {
  fs.mkdirSync(cssDir, { recursive: true });
}

fs.copyFileSync('./node_modules/@stoplight/elements/web-components.min.js', './build/js/site.js')
fs.copyFileSync('./node_modules/@stoplight/elements/styles.min.css', './build/css/site.css');
fs.copyFileSync('./openapi.yaml', './build/openapi.yaml');
fs.copyFileSync('./src/index.html', './build/index.html');
