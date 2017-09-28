const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	node: {
    __dirname: false
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
				test: /\.tsx?$/,
				loader: ["babel-loader", "awesome-typescript-loader"]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'standard-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
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

module.exports = [
  Object.assign(
    {
      target: 'electron-main',
      entry: { main: './src/main.ts' }
    },
    commonConfig),
  Object.assign(
    {
      target: 'electron-renderer',
      entry: { renderer: './src/renderer.ts' },
      plugins: [new HtmlWebpackPlugin()]
    },
    commonConfig)
]