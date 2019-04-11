const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

// const webpackDevServer = requie('webpack-dev-server');

const app = express();
const config = require('./webpack.config');
const compiler = webpack(config);
/* const option = { 
	contentBase:'./dist',
	hot: true,
	host: 'localhost'
} */
// HMR在 Node.js API 中使用 webpack dev server 时，不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。
// 而是，在创建时，将其作为第二个参数传递。
// const sever = new webpackDevServer(compiler, option);
/**
 * server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
});
 */
// 如果使用的是 webpack-dev-middleware

// webpackDevServer.addDevServerEntrypoints(config, option);
// 告诉express 使用 webpack-dev-middleware,
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, { 
	publicPath: config.output.publicPath
}));

/**
 * app.use(require("webpack-hot-middleware")(compiler, { 
 *   log: false,
 *   path: "/__what",
 *   heartbeat: 2000
 * }))
 */

// 将文件serve到 port 3000
app.listen(3000, function() { 
	console.log('Example app listening on port 3000!\n');
})