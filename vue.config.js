module.exports = {
    //...
  devServer: {
    allowedHosts: ['.onrender.com'],
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.sass";`
      }
    }
  }
}
