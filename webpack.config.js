const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'assets')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json','scss'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css|\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                          'css-loader',
                          'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: { plugins: function () {return [ require('autoprefixer')({browsers: ['>1%','last 100 versions','Firefox ESR']}) ]; }  }
                        }
                        ]
                })
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff2|woff|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: '/img/',
                            outputPath: 'img/'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
       new WebpackNotifierPlugin(),
        new ExtractTextPlugin("css/style.css"),
       /* new webpack.ProvidePlugin({
             $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
          }),*/
        new BrowserSyncPlugin({
            port: 3000,
            proxy: 'http://wp-plug.ru/wp-admin',
            files: ["*.php","*/**/*.php", "assets/**/*.css","assets/js/*.js","src/*.js","src/**/*.js"]
        })
    ]
};