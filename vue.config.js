module.exports = {
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
        "https://creativereyne.com/brand",
        "https://creativereyne.com/contact",
        "https://creativereyne.com/portfolio",
        "https://creativereyne.com/projects"
      ]
    }
  }
};
