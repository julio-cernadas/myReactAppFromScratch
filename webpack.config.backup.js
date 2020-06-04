const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',      // Where our app starts and where to start bundling our files.
    mode: 'development',          // Let's Webpack know we're running in dev mode.
    module: {     // Defines how your exported js modules are transformed based on an array of rules.
        rules: [    // Rules 1 - all about transforming ES6 and JSX syntax.
            {
                test: /\.(js|jsx)$/,        // which file types it should be applied on to -> .js + .jsx
                exclude: /(node_modules|bower_components)/, // avoid /node_modules & /bower_components!
                loader: 'babel-loader',     // we'll need to direct webpack to use babel for these files
                options: { presets: ['@babel/env'] }    // we want to use the 'env' preset for the loader.
            },
            {
                test: /\.css$/, // We're not pre-or-post processing .css files, but we still need to bundle them
                use: ['style-loader', 'css-loader'] // use is equal to loader, the only difference is that ...
            } // 'use' is needed when using more than one loader! Note, css-loader requires style-loader!
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },  // specifies which extensions Webpack will resolve
    output: {     // This tells Webpack where to place our bundle!
        path: path.resolve(__dirname, 'dist/'), //local disk directory to store your bundle files
        publicPath: '/dist/', // where to serve files from for the 'webpack-dev-server', for example...
        // by using '/dist/', the app will find webpack assets at: https://localhost:3000/dist/.
        filename: 'bundle.js' // name of our bundled file
    },
    devServer: {  // this is configuration for the 'webpack-dev-server'.
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        publicPath: 'http://localhost:3000/dist/', // the subdirectory here should match output.publicPath
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};