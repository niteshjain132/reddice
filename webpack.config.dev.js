import webpack from "webpack";
import CleanWebpackPlugin from  "clean-webpack-plugin";
import HtmlWebpackPlugin from 'html-webpack-plugin';

var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "client");

export default  {
    devtool: 'eval-source-map',

    entry: [
        'webpack-hot-middleware/client',
        SRC_DIR + "/index.js"
    ],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js?/,
                exclude: /node_modules/,
                include: SRC_DIR,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["react", "es2015", "stage-2"]
                        }
                    }
                ]

            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};
