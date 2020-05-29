
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

const nextConfig = {
  webpack: config => {
    config.plugins.push(
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
      }),
    );
    return config;
  },
};

module.exports = withPlugins(
  [
    [withSass],
    [withImages],
    [withFonts],
  ],
  nextConfig,
);
  
