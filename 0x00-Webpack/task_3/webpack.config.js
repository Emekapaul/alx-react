const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // Entry point for the application
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },

    // Output configuration
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    // Mode configuration: `development` `production`
    mode: 'development',

    performance: {
        maxAssetSize: 1000000,
    },

    // Source maps configuration for debugging
    devtool: 'inline-source-map',

    // Module rules to handle different types of files
    module: {
        rules: [
            {
                // Rule to handle CSS files
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                // Rule to handle image files
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },

    // Development server configuration
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        port: 8564,
        open: true,
        compress: true,
    },

    // Optimization configuration for code splitting
    optimization: {
        splitChunks: {
          chunks: 'all',
        },
    },

    // Plugins configuration
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template for the generated HTML file
            filename: 'index.html',       // Name of the generated HTML file
        }),
        new CleanWebpackPlugin(), // Plugin to clean the output directory before each build
    ],
};