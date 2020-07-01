const path = require('path');

module.exports = {
    entry: './import.js',

    output: {
        path: path.resolve(__dirname, '../'),
        filename: 'script.js'
    },

    watch: true,

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {

                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader'
                ],
            }
        ],
    },
};
