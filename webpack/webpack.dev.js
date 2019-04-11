const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, { 
	mode:'development',
	devtool: 'inline-source-map',
	devServer: { 
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
});