const withPreact = require('next-plugin-preact');


module.exports = withPreact({
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 1024, 1600, 1920, 2048],
  }
});
