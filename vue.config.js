module.exports = {
    //...
  devServer: {
    allowedHosts: 'all',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.sass";`
      }
    }
  }
}
