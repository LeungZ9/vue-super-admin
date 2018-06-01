const fs = require('fs')
const path = require('path')
const PACKAGE_PATH = path.resolve(__dirname, '../packages')
const PREFIX = 'admin-'

const alias = {}
const entry = {}

fs.readdirSync(PACKAGE_PATH).forEach(ele => {
  alias[ele.replace(PREFIX, '@')] = path.resolve(PACKAGE_PATH, `./${ele}/src`)
  if(ele === `${PREFIX}base`) return
  entry[ele.replace(PREFIX, '')] = path.resolve(PACKAGE_PATH, `./${ele}/src/main.js`)
})

module.exports = {
  alias,
  entry,
  include: Object.values(alias)
}
