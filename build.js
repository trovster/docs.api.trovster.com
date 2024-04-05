const fs = require('fs-extra');

const src = './src';
const build = './build';

const dirs = {
  js: `${build}/js`,
  css: `${build}/css`
};

const origination = {
  js: './node_modules/@stoplight/elements/web-components.min.js',
  css: './node_modules/@stoplight/elements/styles.min.css',
  spec: './openapi.yaml',
};

const destination = {
  js: `${dirs.js}/site.js`,
  css: `${dirs.css}/site.css`,
  spec: `${build}/openapi.yaml`,
};

if (! fs.existsSync(dirs.js)) {
  fs.mkdirSync(dirs.js, { recursive: true });
}

if (! fs.existsSync(dirs.css)) {
  fs.mkdirSync(dirs.css, { recursive: true });
}

fs.copy(src, build, { recursive: true });

Object.entries(destination).forEach(([key, value]) => {
  if (fs.existsSync(value)) {
    fs.unlinkSync(value);
  }

  fs.copy(origination[key], value);
});

console.log('Build complete.');
