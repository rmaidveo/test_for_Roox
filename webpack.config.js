const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        port: 1337,
    },
    module: {
        rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        }
        ],
    },
   resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
},
    devtool: 'source-map',
};
