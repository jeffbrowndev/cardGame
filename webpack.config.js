const path = require("path");

module.exports = {
    entry: "./src/main.ts",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      importLoaders: 1,
                      modules: true,
                    },
                  },
                ],
                include: /\.module\.css$/,
              },
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /\.module\.css$/,
              },
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        publicPath: "auto",
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    mode: "development"
}