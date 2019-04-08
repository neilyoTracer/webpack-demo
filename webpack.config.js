const path = require('path');

module.exports = { 
	entry:'./src/index.js',
	output: { 
		// filename: 'main.js',
		filename: 'bundle.js',
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
			}
		]
	}
}

/**
 * 为了在JavaScript模块中import 一个CSS文件,你需要安装style-loader和 css-loader,
 * 并在 module 配置中添加这些loader
 */

