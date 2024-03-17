/* eslint-disable import/extensions */
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
    port: 3001,
  },

  // ------------------
  // Section 3: plugins
  // ------------------
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'mf_home',
      filename: 'remoteEntry.js',
      exposes: {
        './Home': './src/App.jsx',
      },
      // shared: ['react', 'react-dom'],
      shared: {
        'react-router-dom': {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        react: {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],

  // ----------------------------------------------------------
  // Section 4: help webpack resolve imports without extensions
  // ----------------------------------------------------------
  resolve: {
    extensions: ['.js', '.jsx', '.mjs'],
  },

  // -----------------------
  // Section 5: module rules
  // -----------------------
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // - The following line is what caused the error of "Uncaught ReferenceError: React is not defined".
          // options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
          // - And this is what solved it! Adding runtime: 'automatic'
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

export default webpackConfig;
