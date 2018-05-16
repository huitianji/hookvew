https://webpack.docschina.org/

脚手架搭建

vue , es6  , webpack

将工作流集成cli 使用commander;

https://www.npmjs.com/package/commander

npm init  初始化package.json

npm install --save-dev webpack

【es6-->es4】

---babel-core---
babel-loader
babel-preset-es2015

# 最新转码规则
$ npm install --save-dev babel-preset-latest


编译：

-、如果安装在本地

./node_modules/.bin/webpack

或者

webpack

//
"scripts": {

    "build": "./node_modules/.bin/webpack"
  }

  npm run build

【webpack-dev-server】

  devServer:{
        port:3000,
        publicPath:"./app/"
    }


./node_modules/.bin/webpack-dev-server

【url-loader】 file-loader
npm install url-loader --save-dev

npm install --save-dev file-loader
  "file-loader": "^1.1.11",

【style-loader!css-loader （ css-loader、style-loader 和 less-loader） 】


