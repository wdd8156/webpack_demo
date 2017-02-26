let htmlWbpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        main: './src/app.js'
    },
    output: {
        path: './dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: ''
    },
    plugins: [
        new htmlWbpackPlugin({
            template: 'index.html', filename: 'index.html',
            // chunks:['a'],
            inject: 'body',
            title: 'danw',
            minify: {
                collapseWhitespace: true, //删除空格
                removeComments: true //删除注释

            }

        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [ require('autoprefixer')];
                },
            }
        })
        // new htmlWbpackPlugin({     template: 'index.html',     filename: 'b.html',
        // chunks:['b'],     inject: 'body',     title: 'b',     minify: {
        // collapseWhitespace: true, //删除空格         removeComments:true //删除注释     } })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src')
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
                // exclude: path.resolve(__dirname,'node_modules'),
                // include:path.resolve(__dirname,'src'),

            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader',
                // exclude: path.resolve(__dirname,'node_modules'),
                // include:path.resolve(__dirname,'src'),

            },
            {
                test: /\.html$/,
                loader: 'html-loader'

            }
        ]
    },
}