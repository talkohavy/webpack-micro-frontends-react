import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const { ModuleFederationPlugin } = webpack.container;

/** @type {import('webpack').Configuration} */
const webpackConfig = {
  // ---------------------------
  // Section 1: Basic properties
  // ---------------------------
  mode: 'development',
  entry: {
    container: './src/main.jsx',
  },

  // ---------------------
  // Section 2: dev server
  // ---------------------
  devServer: {
    port: 3000,
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
      remotes: {
        mf_home: 'mf_home@http://localhost:3001/remoteEntry.js',
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
        resolve: {
          fullySpecified: false, // <--- important! otherwise you'll have to add extensions, as well as '/index.js'.
        },
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
        use: [
          'style-loader',
          'css-loader', // <--- this works! modules:true not so much.
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: true, // <--- from css modules!
          //     importLoaders: 1,
          //   },
          // },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};

export default webpackConfig;
