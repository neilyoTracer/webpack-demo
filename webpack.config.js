const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js'
		// print: './src/print.js'
		// another:'./src/another-module.js'
	},
	output: {
		// filename: 'main.js',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
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
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '管理输出'
		})
	]
}

/**
 * 需要补充的知识点
 * 1. 合乎逻辑下一步是，压缩和优化你的图像。查看 image-webpack-loader 和 url-loader，以了解更多关于如果增强加载处理图像功能。 -- 管理资源 - 加载fonts字体
 * 2. htmlwebpackplugin -- 管理输出 - 设置 HtmlWebpackPlugin
 * 3. manifest
 * 4. 
 */
