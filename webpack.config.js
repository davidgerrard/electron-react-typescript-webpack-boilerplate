const path = require('path')

const commonConfig = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	devtool: "source-map",
	module: {
		rules: [{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.ts?$/,
				loader: "awesome-typescript-loader"
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
	},
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	}
}

module.exports = Object.assign({
		entry: {
			main: './src/main.ts'
		}
	},
	commonConfig)