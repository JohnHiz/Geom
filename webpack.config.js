const { env: { NODE_ENV = "development", PORT = 3000 } = {} } = process;
const { resolve } = require("path");
const { HotModuleReplacementPlugin: HMRP } = require("webpack");
const MCEP = require("mini-css-extract-plugin");
const HWP = require("html-webpack-plugin");
const { CleanWebpackPlugin: CWP } = require("clean-webpack-plugin");
const EWP = require("eslint-webpack-plugin");

const isProduction = NODE_ENV === "production";
const resolvePath = (path = "") => resolve(`${process.cwd()}/${path}`);
const HotModuleReplacementPlugin = new HMRP();
const CleanWebpackPlugin = new CWP();
const EslintWebpackPlugin = new EWP();
const MiniCssExtractPlugin = new MCEP();
const HtmlWebpackPlugin = new HWP({
    template: resolvePath("public/index.html"),
});

const getFilename = () => isProduction ? "[name].min.js" : "[name].js";
const getStyleLoader = () => isProduction ? MCEP.loader : "style-loader";
const getDevTool = () => isProduction ? false : "inline-source-map";
const getDevServer = () => !isProduction && ({
    historyApiFallback: true,
    compress: true,
    port: PORT,
    hot: true,
});
const getPlugins = () => {
    const plugins = [
        CleanWebpackPlugin,
        EslintWebpackPlugin,
        HtmlWebpackPlugin,
    ];

    plugins.push(isProduction ?
        MiniCssExtractPlugin : HotModuleReplacementPlugin);

    return plugins;
};

/** @type { import('webpack').Configuration } */
module.exports = () => ({
  entry: resolvePath("src/index.tsx"),
  output: {
    path: resolvePath("build"),
    filename: getFilename()
  },
  mode: NODE_ENV,
  devtool: getDevTool(),
  plugins: getPlugins(),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devServer: getDevServer(),
  optimization: {
    minimize: isProduction,
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: ['@svgr/webpack']
      },
      {
        test: /\.(?:ico|gif|png|jpg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          getStyleLoader(),
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
});
