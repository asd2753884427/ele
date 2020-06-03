// 使用node的path模块
const path = require('path')

// 引入vue-loader插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

//  引入clean-webpack-plugin
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin')

// 引入 webpack 插件
const webpack = require('webpack')
module.exports = {
	// mode:'production',  //发布
	mode: 'development', //生成
	// 打包的入口
	entry: './src/main.js',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// 指定服务器根目录
		contentBase: path.resolve(__dirname, "dist"),
		// 自动打开浏览器
		open: true,
		hot:true
	},
	// 打包的出口
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	//打包规则
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader'
		}, {
			test: /\.(jpg|jpeg|png|svg|ttf|woff|woff2|)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]',
				limit: 2048
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader', 'postcss-loader']
		}, {
			test: /\.styl(us)?$/,
			use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
		}]
	},
	//插件
	plugins: [
		new VueLoaderPlugin(),
		// 自动生成index.html
		new HtmlWebpackPlugin({
			// 以当前路径的HTML作为模板进行打包
			template: './public/index.html'
		}),
		new CleanWebpackPlugin(),
		// 模块热替换
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		// 在导入语句没带文件后缀时，webpack会自动按照顺序添加后缀名查找
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
}
