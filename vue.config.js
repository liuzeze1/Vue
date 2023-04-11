const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    port: 5001,
    proxy: {
      "/api": {
        target: "http://10.5.51.110:5001/",
        pathRewrite: { "^/api": "" },
        // ws: true,
        changeOrigin: true,
      },
    },
  },
});
