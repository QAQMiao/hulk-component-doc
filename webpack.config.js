var webpack = require('webpack');
var path = require('path');
var config = {
	entry: {
		doc: './src/index.jsx',
	},
	output: {
		publicPath: 'dist/',
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			},
		]
	},
	resolve: {
		extensions: ['.jsx', '.js']
    },
    devServer: {
		port: 8888,
		historyApiFallback: true,
    },
	devtool: 'source-map',
	target: 'web'
};
module.exports = config;
