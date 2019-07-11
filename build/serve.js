const path = require('path')
const { entry, alias } = require('./packages.js')
const mockPath = path.resolve(__dirname, '../mock')

delete entry.base

module.exports = {
  devServer: {
    open: true,
    before(app) {
      app.get('/menu', (req, res, next) => {
        res.json(require(path.resolve(mockPath, 'menu.json')))
      })
    },
    disableHostCheck: true
  },
  pages: entry,
  chainWebpack: config => {
    config.resolve.alias.delete('@')
    for (let i in alias) {
      config.resolve.alias.set(i, alias[i])
    }
  }
}
