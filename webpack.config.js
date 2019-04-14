const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		// filename: 'main.js',
		// filename: '[name].bundle.[hash].js',
		// chunkFilename: '[name].chunk.[hash].js',
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	/* devServer: { 
		contentBase: './dist',
		hot: true
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
	}, */
	plugins: [
		new CleanWebpackPlugin(),
		// new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			title: 'Caching'
		}),
		new webpack.HashedModuleIdsPlugin()
	],
	optimization: { 
		runtimeChunk: 'single',
		splitChunks: { 
			// chunks: 'all'
			cacheGroups: { 
				vendor: { 
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
}

/**
 * 需要补充的知识点
 * 1. 进一步阅读 Lazy Loading ES2015 Module in the Browser 
 * 2. 
 * 3. 
 */

