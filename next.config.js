const withPreact = require('next-plugin-preact');
const withPlugins = require('next-compose-plugins');

// empty plugin getting next config and returning it
let withBundleAnalyzer = (args) => args;

if (process.env.ANALYZE === 'true') {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
  })
}

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    [withPreact]
  ],
  {
    reactStrictMode: true,
    images: {
      deviceSizes: [640, 1024, 1600, 1920, 2048],
    }
  }
);
