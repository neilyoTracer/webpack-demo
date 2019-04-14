const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
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
	devtool:'inline-source-map', //使用 source map 
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
	],
	/* mode:'development',
	optimization: { 
		usedExports: true
	} */
	mode: 'production'
}

/**
 * 需要补充的知识点
 * 1. 合乎逻辑下一步是，压缩和优化你的图像。查看 image-webpack-loader 和 url-loader，以了解更多关于如果增强加载处理图像功能。 -- 管理资源 - 加载fonts字体
 * 2. htmlwebpackplugin -- 管理输出 - 设置 HtmlWebpackPlugin
 * 3. manifest
 * 4. source map 可用选项 -- 开发环境 - 使用source map
 * 5. dev server配置中的 publicPath 以及 webpack-dev-server配置文档 ,
 *    模块热替换(hot module replacement)！ -- 开发环境 - 使用webpack-dev-server
 * 6. React Hot Loader -- 模块热替换 - 其他代码和框架
 * 7. 还可以在 module.rules 配置选项 中设置 "sideEffects" -- tree shaking - 将文件标记为 side-effect-free(无副作用)
 * 8. #2537 does not set NODE_ENV to "production" in webpack config -- 生成环境 - mode
 * 9. 在生产环境下压缩 -- 生产环境 - 最小化css
 */



 /**
  * 重要知识点
  * 1. webpack-dev-middleware 是一个封装器(wrapper)，
  * 它可以把 webpack 处理过的文件发送到一个 server。 
  * webpack-dev-server 在内部使用了它，
  * 然而它也可以作为一个单独的 package 来使用，
  * 以便根据需求进行更多自定义设置。
  * 
  * 2. 运行 tree shaking 需要 ModuleConcatenationPlugin。
  * 通过 mode: "production" 可以添加此插件。
  * 如果你没有使用 mode 设置，记得手动添加 ModuleConcatenationPlugin。
  * 
  * 3. manifest 
  * 在你的应用程序中，形如 index.html 文件、一些 bundle 和各种资源，都必须以某种方式加载和链接到应用程序，
  * 一旦被加载到浏览器中。在经过打包、压缩、为延迟加载而拆分为细小的 chunk 这些 webpack 优化 之后，
  * 你精心安排的 /src 目录的文件结构都已经不再存在。所以 webpack 如何管理所有所需模块之间的交互呢？
  * 这就是 manifest 数据用途的由来……
  * 当 compiler 开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "manifest"，
  * 当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块。无论你选择哪种 模块语法，
  * 那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。
  * 通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。
  * 
  * 问题 
  * 所以，现在你应该对 webpack 在幕后工作有一点了解。“但是，这对我有什么影响呢？”，你可能会问。
  * 答案是大多数情况下没有。runtime 做完成这些工作：一旦你的应用程序加载到浏览器中，使用 manifest，
  * 然后所有内容将展现出魔幻般运行结果。然而，如果你决定通过使用浏览器缓存来改善项目的性能，理解这一过程将突然变得极为重要。
  */
