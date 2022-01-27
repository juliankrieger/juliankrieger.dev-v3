const withPlugins = require('next-compose-plugins');
const withPreact = require('next-plugin-preact');

const nextJsConfig = {
}

module.exports = withPlugins(
  [
    [withPreact]
  ],
  nextJsConfig
)
