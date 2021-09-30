module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/CreativeReyne/" : "/",
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugin("VuetifyLoaderPlugin").tap(() => [
      {
        progressiveImages: true
      }
    ]);
  },
  pluginOptions: {
    sitemap: {
      urls: [
        "https://creativereyne.com/",
        "https://creativereyne.com/home",
        "https://creativereyne.com/build-your-brand",
        "https://creativereyne.com/contact",
        "https://creativereyne.com/portfolio"
      ]
    }
  }
};
