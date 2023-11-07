const path = require("path");

module.exports = (env) => {
  const isDev = env.development ? true : false;
  const config = {};

  config.entry = `./src/${env.productName}/index.js`;
  config.output = {
    path: path.resolve(__dirname, `./build/${env.productName}/dist`),
    filename: "index.js",
    library: "productService",
  };

  config.mode = isDev ? "development" : "production";
  config.resolve = {
    extensions: [".js"],
  };

  config.module = {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.handlebars$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              runtime: path.resolve(__dirname, `./src/shared/myhbs.js`),
              precompileOptions: {
                knownHelpersOnly: false,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  };

  return config;
};
