const webpack = require('webpack');
const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
  {
      path: '/',
      lastmod: '2021-11-22',
      priority: 1.0,
      changefreq: 'yearly'
  },
  {
      path: '/login',
      lastmod: '2021-11-22',
      priority: 0.9,
      changefreq: 'yearly'
  }
]

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      }),
      new SitemapPlugin({ base: 'https://masterinusa.com', paths })
    ]
  },
  pwa: {
    name: 'Master in USA',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
