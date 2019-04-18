const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(),
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

