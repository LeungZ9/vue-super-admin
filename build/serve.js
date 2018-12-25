const { entry, alias } = require('./packages.js')

delete entry.base

module.exports = {
  devServer: {
    open: true,
    disableHostCheck: true
  },
  pages: entry,
  chainWebpack: config => {
    config.resolve.alias.delete('@')
    for(let i in alias){
      config.resolve.alias.set(i , alias[i])
    }
  }
}
