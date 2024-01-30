import HtmlWebpackPlugin from 'html-webpack-plugin';
import ModuleFederationPlugin from 'webpack/lib/container/ModuleFederationPlugin.js';

/** @type {import('webpack').Configuration} */
const webpackConfig = {
  // ---------------------------
  // Section 1: Basic properties
  // ---------------------------
  mode: 'development',
  entry: {
    container: './src/index.js',
  },

  // ---------------------
  // Section 2: dev server
  // ---------------------
  devServer: {
    port: 8000,
  },

  // ------------------
  // Section 3: plugins
  // ------------------
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
    }),
  ],
};

export default webpackConfig;
