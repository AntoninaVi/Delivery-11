
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Delivery-11/'
  : '/',

  configureWebpack: {
    plugins: [

      new CopyWebpackPlugin({
        patterns: [
          {
            from: "src/assets/img",
            to: "img", 
          },
        ],
      }),
    ],
  },
};
