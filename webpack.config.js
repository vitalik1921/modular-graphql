const path = require('path');

module.exports = {
  name: 'server',
  entry: './src/app.ts',
  mode: 'development',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.gql', '.mjs'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
