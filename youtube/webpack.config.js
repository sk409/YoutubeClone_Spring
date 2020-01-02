//const path = required("path");

const jsSrcDir = "./src/main/resources/js/";
//const sassSrcDir = "./src/main/resources/sass/";

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = (env, args) => {
  const devmode = args.mode === "development";
  return {
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.js$/,
          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "vue-style-loader", "css-loader"]
        },
        {
          test: /\.scss/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js", ".vue"],
      alias: {
        vue$: "vue/dist/vue.esm.js"
      }
    },
    plugins: [new VueLoaderPlugin()],
    devtool: devmode ? "source-map" : "none",
    entry: {
      app: jsSrcDir + "app.js",
      "dashboard.videos": jsSrcDir + "dashboard.videos.js",
      index: jsSrcDir + "index.js",
      "videos.create": jsSrcDir + "videos.create.js"
    },
    output: {
      filename: "[name].js",
      path: __dirname + "/src/main/resources/static/js"
    }
  };
};
