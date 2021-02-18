const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//const isDev = process.env.NODE_ENV === 'development'
//const isProd = !isDev

module.exports = {
    mode: 'development',
    //context: path.resolve(__dirname, 'src'),
    entry: ['@babel/polyfill','./src/client/index.js'],
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.png', '.jsx']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4200,
        hot: true, //isDev
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/public/index.html',
            minify: {
                collapseWhitespace: false //isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                //use: ['style-loader','css-loader']
                //use: [MiniCssExtractPlugin.loader, 'css-loader']
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hot: true,
                            reloadAll: true
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hot: true,
                        reloadAll: true
                      },
                    },
                    'css-loader'
                  ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    }
}
