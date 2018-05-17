/**
 * Created by huitian on 2018/5/15.
 */
const path = require("path");
const webpack = require('webpack');


module.exports = {
    mode: 'development',//开发环境
    //mode: 'production',//none --生产环境
    // //bundle:"./src/main.js"//以是一个数组['./entry.js','./entry2.js']
    entry:{
        build1:"./app/js/views/a.js",
        build2:"./app/js/views/b.js"
    },
    output:{
        path:path.resolve(__dirname,"app/dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:"babel-loader",
                exclude: /node_modules/,
                query: {
                    compact: false,
                    presets:['es2015']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: '[path][name].[ext]',
                            //outputPath: '',
                            publicPath: '../../' //你实际项目的引用地址前缀
                        }
                    }
                ]
            },
            //{
            //    test: /\.(png|jpg|gif)$/,
            //    use:[
            //        {
            //            loader: 'file-loader',
            //            options: {
            //                name: '[path][name].[ext]',
            //                outputPath: 'images/'
            //            }
            //        }
            //    ]
            //}
            //,
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]

            },

            //{
            //    test:/\.(png|jpg)$/,
            //    //loader:'url-loader?limit = 4000'
            //    loader: 'url-loader?limit=1000&name=./img/[hash].[ext]'
            //}//4000 == 4k 如果大小小于4k 转换成base64引入到页面里面去

            //处理.vue文件
            //{
            //    test: /\.vue$/,
            //    loader: 'vue-loader'
            //}
        ]
    },
    plugins:[
        new webpack.BannerPlugin('//huitian')
        //,  //前缀
        //new webpack.optimize.CommonsChunkPlugin('common.js')//通用的js
    ],
    resolve:{
        alias:{
            //jquery:"./lib/jquery/jquery.js"
        }
    },
    devServer:{
        port:3000,
        //publicPath:"./app/",
        contentBase: path.join(__dirname, "./app/"),
        compress: true,
        //histroyApiFallback : true,
        //hot : true,
        inline : true,
        //progress : true,
        //colors:true
    }
};

