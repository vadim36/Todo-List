const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  /*resolve: {
    alias: {
      '@': './src',
      '@/scripts': './src/scripts'
    }
  },*/
  entry: {
    //TODO:alias context
    main: ['@babel/polyfill', './scripts/index.ts']
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}