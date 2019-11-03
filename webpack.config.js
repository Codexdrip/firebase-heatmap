const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    page1: "./src/js/canvas.js",
    page2: "./src/js/firebasemap.js",
    page3: "./src/js/scrollAnima.js"
  },
  output: {
    path: __dirname + "/dist/",
    filename: "./js/[name].bundle.js"
  },
  resolve: {
    alias: {
      TweenLite: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TweenLite.js"
      ),
      TweenMax: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TweenMax.js"
      ),
      TimelineLite: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TimelineLite.js"
      ),
      TimelineMax: path.resolve(
        "node_modules",
        "gsap/src/uncompressed/TimelineMax.js"
      ),
      ScrollMagic: path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
      ),
      "animation.gsap": path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
      ),
      "debug.addIndicators": path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
      )
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "/images/[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] },
      files: ["./dist/*"],
      notify: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "favicon.ico",
      template: "src/index.html"
    })
  ],
  watch: true,
  devtool: "source-map"
};
