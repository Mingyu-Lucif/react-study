const path = require('path');

module.exports = {
	name: 'wordrelay-setting',
	mode: 'development', // production
	devtool: 'eval',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	entry: {
		app: ['./client'],
	},
	output: {
		path: path.join(__dirname, 'dist'), // __dirname current directory
		filename: 'app.js',
	},
};
