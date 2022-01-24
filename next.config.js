const mdx = require('@next/mdx')({
  extension: /\.mdx?$/
})

const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [mdx, {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    target: "serverless",
  }],
  [withOptimizedImages, {
    handleImages: ['jpeg', 'png', 'svg'],
  }],
], {
  images: {
    loader: 'custom',
    disableStaticImages: true
  }
})
