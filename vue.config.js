module.exports = {
  devServer: {
    compress: true,
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
