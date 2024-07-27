const path = require('path');

module.exports = {
    // Entry point for the application
    entry: './js/dashboard_main.js',

    // Output configuration
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    // Mode configuration
    mode: 'production',

    performance: {
        maxAssetSize: 1000000,
    },

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
};