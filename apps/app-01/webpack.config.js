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
      filename: 'list1.js',
      exposes: {
        './list2': './src/index.js',
      },
    }),
  ],
};

export default webpackConfig;
