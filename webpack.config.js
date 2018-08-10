const webpack = require('webpack');
const path = require('path');
const package = require('./package');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');

function isDevEnvironment() {
    return (process.env.NODE_ENV || 'development') === 'development';
}

module.exports = {
    context: __dirname,
    mode: process.env.NODE_ENV || 'development',
    devtool: isDevEnvironment() ? 'inline-source-map' : false,
    entry: {
        app: path.resolve(__dirname, 'src/main/ts/index.ts'),
        polyfills: path.resolve(__dirname, 'src/main/ts/polyfills.ts'),
        vendor: path.resolve(__dirname, 'src/main/ts/vendor.ts')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.tsx?$/,

                loader: 'ts-loader'
                // loader: 'awesome-typescript-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: !isDevEnvironment(),
                            sourceMap: isDevEnvironment()
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevEnvironment()
                        }
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        // clean dist folder
        new CleanWebpackPlugin(['dist', 'types', 'build'], {}),

        new ExtractTextPlugin({
            filename: "[name].css"
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            templateParameters: {
                'version': package.version
            },
            hash: true,
            template: path.resolve(__dirname, 'src/web/index.ejs'),
            favicon: path.resolve(__dirname, 'src/web/assets/images/favicon.ico')
        }),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 4,
                    indent_with_tabs: true,
                    indent_inner_html: true,
                    preserve_newlines: true,
                    unformatted: ['p', 'i', 'b', 'span']
                }
            },
            replace: [' type="text/javascript"']
        }),
    ],

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
};