const webpack = require('webpack')
const envFile = require('node-env-file')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {

}

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    extractSass,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET)

      }
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
     'node_modules',
     './app/components',
     './app/api'
   ],
    alias: {
      app: 'app',
      applicationStyles: 'app/styles/app.scss',
      actions: 'app/actions/action.js',
      reducers: 'app/reducers/reducers.js',
      configureStore: 'app/store/configureStore.js'
    },
    extensions: ['*', '.js']
  },
  module: {
    rules: [
      {
       test: /\.scss$/,
       use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: [
                      path.resolve(__dirname, './node_modules/foundation-sites/scss')
                    ]
                }
            }]
      },
      {
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-2', 'stage-0']
        },
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
