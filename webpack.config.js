module.exports = {
    
    mode: 'production',
    entry: {
        'entry': './src/entry.js',
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
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};
