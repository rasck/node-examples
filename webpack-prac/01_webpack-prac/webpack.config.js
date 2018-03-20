var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html'
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [
            {
                // Only run this loader on files with .js exentension
                test: /\.js$/,
                // the loader should only run files in the app directory
                include: __dirname + '/app',
                // Tell webpack to run the es2015 transformation on all files 
                // thats has .js exentension (test) and is within the app directory (include)
                loader: 'babel?presets[]=es2015'
            }
        ]
    },
    output: {
        filename: 'index.bundle.js',
        path: __dirname + '/dist'
    },
    plugins: [ HTMLWebpackPluginConfig ]
};