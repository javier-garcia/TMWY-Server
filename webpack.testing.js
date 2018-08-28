const nodeExternals = require('webpack-node-externals');
const path = require('path');

process.env.NODE_ENV = 'testing';

module.exports = {
  target: 'node',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]',
  },
  resolve: {
    alias: {
      '~/testhelpers': path.resolve(__dirname, 'test/helpers'),
      '~testhelpers': path.resolve(__dirname, 'test/helpers'),
      '~apiSpecs': path.resolve(__dirname, 'test/apiSpecs'),
      '~/apiSpecs': path.resolve(__dirname, 'test/apiSpecs'),
      '~/config': path.resolve(__dirname, 'src/config/index'),
    },
  },
  devtool: 'cheap-module-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'none',
  optimization: {
    nodeEnv: false,
  },
};
