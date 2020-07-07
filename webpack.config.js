const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
    context:path.resolve(__dirname, 'src'),
    entry: './index.js',
    mode: 'development',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        // new CopyPlugin({
        //   patterns: [
        //     { from: './img', to: path.resolve(__dirname, 'dist/img') },
        //   ],
        // }),

    ],
    devServer: {
        port: 3000
      },
    module: {
        rules: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          {
            test: /\.png$/,
            use: 'url-loader'
          },
        
          //     {
          //     "test": /\.scss$/,
          //     "loaders": ["style-loader", "css-loader", "sass?sourceMap"]
          // },
          { 
            test: /\.(png|jpg)$/,
            include: path.join(__dirname, './src/img'),
            loader: 'file-loader' 
         },
          
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          },
        ],
      },

}