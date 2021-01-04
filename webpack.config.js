module.exports = {
    entry: {
        app: "./app/javascript/index.js"
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: '/',
        filename: 'bundle.js',
    },
//    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader'}
                ]
            },
            {test: /\.jade$/, use: "jade-loader"}, //don't think this is being used
            // {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ]
    },
    devServer: {
        contentBase: './dist',
        port: '3000',
        inline: true
    }
    // resolve: {
    //     extensions: [
    //         ".webpack.js",
    //         ".web.js", 
    //         ".js",
    //         ".json",
    //         ".css"
    //     ],
    //     modules: [
    //         './node_modules',
    //         './app'
    //     ]
    // }
};
