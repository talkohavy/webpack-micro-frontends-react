import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';

/** @type {import('webpack').Configuration} */
const webpackConfig = {
  // ---------------------------
  // Section 1: Basic properties
  // ---------------------------
  mode: 'development',
  entry: {
    list: './src/index.js',
  },

  // ---------------------
  // Section 2: dev server
  // ---------------------
  devServer: {
    port: 8001,
  },

  // ------------------
  // Section 3: plugins
  // ------------------
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'remote_app_01',
      filename: 'sb1_md1.js',
      exposes: {
        './sub1-module1': './src/index.js',
      },
      shared: ['lodash', 'axios', '@luckylove/lodash'],
    }),
  ],
};

export default webpackConfig;
