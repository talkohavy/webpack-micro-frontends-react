/** @type {import('webpack').Configuration} */
const webpackConfig = {
  mode: 'development',
  entry: './src/index.js',

  // ---------------------
  // Section 2: dev server
  // ---------------------
  devServer: {
    port: 8001,
  },
};

export default webpackConfig;
