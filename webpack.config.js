const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugins = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = { 
	entry: './src/index.js',
	devtool: 'inline-source-map',
	output: { 
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: { 
		rules: [
			// {
			// 	test: require.resolve('./src/index.js'),
			// 	use: 'imports-loader?this=>window'
			// },
			{
				test: require.resolve('./src/globals.js'),
				use: 'exports-loader?file,parse=helpers.parse'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugins({ 
			title: '管理输出'
		}),
		new webpack.ProvidePlugin({ 
			// _: 'lodash'
			join: ['lodash', 'join']
		})
	]
}