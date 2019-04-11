const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode:'development',
	entry: {
		app: './src/index.js'
		// print: './src/print.js'
	},
	output: {
		// filename: 'main.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			},
			{
				test: /\.(csv|tsv)$/,
				use: ['csv-loader']
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			}
		]
	},
	devtool:'inline-source-map',
	devServer:{
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '热模块替换'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}

/**
 * 需要补充的知识点
 * 1. 合乎逻辑下一步是，压缩和优化你的图像。查看 image-webpack-loader 和 url-loader，以了解更多关于如果增强加载处理图像功能。 -- 管理资源 - 加载fonts字体
 * 2. htmlwebpackplugin -- 管理输出 - 设置 HtmlWebpackPlugin
 * 3. manifest
 * 4. source map 可用选项 -- 开发环境 - 使用source map
 * 5. dev server配置中的 publicPath 以及 webpack-dev-server配置文档 ,模块热替换(hot module replacement)！ -- 开发环境 - 使用webpack-dev-server
 */


 /**
  * 重要知识点
  * 1. webpack-dev-middleware 是一个封装器(wrapper)，
  * 它可以把 webpack 处理过的文件发送到一个 server。 
  * webpack-dev-server 在内部使用了它，
  * 然而它也可以作为一个单独的 package 来使用，
  * 以便根据需求进行更多自定义设置。
  * 
  * 
  */
