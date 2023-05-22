const { merge } = require('webpack-merge')
// eslint-disable-next-line no-unused-vars
const path = require('path')
const common = require('./webpack.common')

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: true
      }
    },
    compress: true
  }
})
