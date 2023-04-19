const path = require('path');
module.exports = {

    mode: 'production',
    entry: {
        file: './src/entry.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'outsystemsui.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'raw-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: [path.resolve(__dirname, 'node_modules')]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    }
};
