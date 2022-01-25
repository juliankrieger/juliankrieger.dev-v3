const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const nextJsConfig = {
  images: {
    loader: 'custom',
    disableStaticImages: true
  }
}

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        handleImages: ['jpeg', 'png', 'svg'],
        imagesFolder: 'images',
        optimizeImages: true,
        removeOriginalExtension: false,
        responsive: {
          adapter: require('responsive-loader/sharp')
        }
      }
    ],
  ],
  nextJsConfig
)
