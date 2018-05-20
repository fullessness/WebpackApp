const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
  const _plugins = [
    new HtmlWebpackPlugin({
      title: 'WebpackApp for tutorial',
      template: './src/index.html',
      "hash": false,
      "inject": 'head',
      "inject": 'body',
      "compile": true,
      "favicon": false,
      "minify": false,
      "cache": true,
      "showErrors": true,
      "chunks": ['app', 'hello'], // "all"
      "excludeChunks": []
    })
  ];

  if (env != null && env.runCleanWebpackPlugin != null && env.runCleanWebpackPlugin === true) {
    _plugins.push(new CleanWebpackPlugin(['dist']));
  }

  const res = {
    entry: {
      app: './src/index.js',
      hello: './src/hello.ts',
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    plugins: _plugins,
    devServer: {
      contentBase: './dist'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  };

  return res;
}

