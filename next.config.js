const withPlugins = require('next-compose-plugins');

const nextJsConfig = {
  images: {
    deviceSizes: [640, 1024, 1600, 1920, 2048],
  },
}

module.exports = withPlugins(
  [
  ],
  nextJsConfig
)
