const webpack = require('webpack');
const path = require('path');
const package = require('./package');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = (process.env.NODE_ENV !== 'production');

// This helper function is not strictly necessary.
// I just don't like repeating the path.join a dozen times.
function srcPath(subdir) {
    return path.join(__dirname, "src", subdir);
}


module.exports = {
    context: __dirname,

    mode: process.env.NODE_ENV || 'development',

    entry: {
        main: [
            path.resolve(__dirname, 'src/main/ts/index.ts'),
        ],
        exports: [
            path.resolve(__dirname, 'src/main/ts/exports.ts'),
        ],
        polyfills: path.resolve(__dirname, 'src/main/ts/polyfills.ts'),
        vendor: path.resolve(__dirname, 'src/main/ts/vendor.ts'),

        styles: path.resolve(__dirname, 'src/web/assets/styles/main.scss'),
    },

    output: {
        publicPath: "",
        path: path.resolve(__dirname, 'dist'),
        filename: "assets/js/[name].js",
        pathinfo: true,
    },

    devtool: devMode ? 'inline-source-map' : false,

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {
            "@main" : srcPath("main/ts"),
            "@test" : srcPath("test/ts"),
            "@images" : srcPath("web/assets/images"),
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader'
                //loader: 'awesome-typescript-loader'
            },
            // {
            //     test: require.resolve("assets/js/index.js"),
            //     use: [
            //         {
            //             loader: `expose-loader`,
            //             options: 'sayMyName'
            //         }
            //     ]
            // },
            {
                test: /\.scss$/,
                use: [
                    // creates style nodes from JS strings
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        // translates CSS into CommonJS
                        loader: "css-loader", options: {
                            sourceMap: true
                        },
                    },
                    {
                        // Autoprefixer usw.
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                        },
                    },
                    {

                        // compiles Sass to CSS, using Node Sass by default
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    },
                    ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: [
                    'file-loader?name=assets/images/[name]-[hash:8].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 10
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        // clean dist folder
        new CleanWebpackPlugin(['dist', 'types', 'build'], {}),

        // new ExtractTextPlugin({
        //     filename: "[name].css"
        // }),

        new CopyWebpackPlugin([
            {from:'src/web/assets/images/static',to:'assets/images/static'}
        ]),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            templateParameters: {
                'version': package.version
            },
            hash: true,
            // Weitere Infos: https://goo.gl/wVG6wx
            template: path.resolve(__dirname, 'src/web/index.ejs'),

            // Variablen funktionieren nicht
            // template: '!!html-loader?interpolate!src/web/index.ejs',
            favicon: path.resolve(__dirname, 'src/web/assets/images/favicon.ico'),
            chunks: [ 'main', 'styles' ]
        }),

        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? 'assets/styles/[name].css' : 'assets/styles/[name].[hash]fn.css',
            chunkFilename: devMode ? 'assets/styles/[id].css' : 'assets/styles/[id].[hash]cu.css',
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

        new LiveReloadPlugin(),
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