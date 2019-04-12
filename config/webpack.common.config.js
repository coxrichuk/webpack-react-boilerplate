const path = require('path')
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , MiniCssExtractPlugin = require('mini-css-extract-plugin')
    , CopyWebpackPlugin = require('copy-webpack-plugin')
    , CleanWebpackPlugin   = require('clean-webpack-plugin');;

module.exports = {

    // Entry point(s) (where to build from)
    entry: {
        main: './src/index.js'
    },

    // Output (where to write files to)
    // Implements hasing while generating build to speed things up
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js'
    },

    // Resolve common extensions when we import modules
    resolve: {
        extensions: ['.js', '.ts']
    },

    // Plugins
    plugins: [

        // HTML
        new HtmlWebpackPlugin({
            title: 'Webpack boilerplate',
            content: 'Welcome to Webpack boilerplate',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),

        // Include all styles (CSS|SCSS) into one file
        // Implements hasing while generating build to speed things up
        new MiniCssExtractPlugin({
            filename: 'style.[chunkhash].css'
        }),
        
        // Move assets to the correct directories
        new CopyWebpackPlugin([{
            from:'./src/assets/images',
            to:'assets/images'
        }]),
    
        // Clean up the ./dist folder during build(s)
        new CleanWebpackPlugin(),

    ],

    // Loaders

    // Load modules inside module . test
    module: {
        rules: [
            
            {
                // Use Babel to Transpile any .js or .ts files from ES6 to ES5
                test: [/.js$|.ts$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/typescript'
                        ]
                    }
                }
            },
            
            {
                // Compile SCSS to CSS, include CSS and load any postcss config
                test: [/.css$|.scss$/],
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            
            {
                // Include static assets (images etc)
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images'
                        }
                    }
                ]
            },
        ]
    }
};
