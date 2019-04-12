/* Config for development */

const merge = require('webpack-merge')
    , webpackBaseConfig = require('./webpack.common.config.js');
    
module.exports = merge(webpackBaseConfig, {
    /* Production config */
});