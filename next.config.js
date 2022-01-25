const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [withOptimizedImages, {
    handleImages: ['jpeg', 'png', 'svg'],
  }],
], {
  images: {
    loader: 'custom',
    disableStaticImages: true
  }
})
