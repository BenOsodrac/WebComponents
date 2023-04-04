module.exports = {

    mode: 'production',
    entry: {
        file: './src/entry.js',
    },
    output: {
        filename: 'outsystemsui.js',
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                },
            },
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ],
    },
};