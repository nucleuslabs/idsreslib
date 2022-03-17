const path = require('path');

const dist = path.resolve('./dist');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: 'production',
  output: {
    library: 'IdsResLib',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: dist,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
        exclude: [
          /node_modules/,
          /dist/,
        ],
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  optimization: {
    minimize: true,
    usedExports: true,
  },
  plugins: [
    new NodePolyfillPlugin({
      excludeAliases: ['console'],
    }),
  ],
};
