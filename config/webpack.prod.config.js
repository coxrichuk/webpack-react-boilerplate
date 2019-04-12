const merge = require('webpack-merge')
    , UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    , OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
    , webpackBaseConfig = require('./webpack.common.config.js');
    
module.exports = merge(webpackBaseConfig, {
    optimization: {
        minimizer: [
            
            /* Optimise Javascript */
            new UglifyJsPlugin(),
            
            /* Optimise CSS */
            new OptimizeCSSAssetsPlugin()
        ]
     }
});