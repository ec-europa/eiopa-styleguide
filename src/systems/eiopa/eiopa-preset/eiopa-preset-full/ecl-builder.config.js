const path = require('path');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const outputFolder = path.resolve(__dirname, isProd ? './dist' : './build');

const nodeModules = path.resolve(__dirname, '../../../../../node_modules');

// SCSS includePaths
const includePaths = [nodeModules];

const banner = `${pkg.name} - ${
  pkg.version
} Built on ${new Date().toISOString()}`;

module.exports = {
  scripts: [
    // {
    //   entry: path.resolve(__dirname, 'eiopa-preset-full.js'),
    //   dest: path.resolve(outputFolder, 'scripts/ecl-eiopa-preset-full.js'),
    //   options: {
    //     banner,
    //     moduleName: 'EIOPA',
    //     sourceMap: isProd ? false : 'inline',
    //   },
    // },
  ],
  styles: [
    {
      entry: path.resolve(__dirname, 'eiopa-preset-full.scss'),
      dest: path.resolve(outputFolder, 'styles/ecl-eiopa-preset-full.css'),
      options: {
        banner,
        includePaths,
        sourceMap: isProd ? 'file' : true,
      },
    },
  ],
  copy: [
    {
      from: path.resolve(
        nodeModules,
        '@ecl/eiopa-component-social-icon/images'
      ),
      to: path.resolve(outputFolder, 'images'),
    },
    {
      from: path.resolve(nodeModules, '@ecl/eiopa-component-logo/images'),
      to: path.resolve(outputFolder, 'images'),
    },
  ],
};
