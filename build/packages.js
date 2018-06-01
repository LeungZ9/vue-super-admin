const fs = require('fs')
const path = require('path')
const env = require('./env')

const alias = {}
const entry = {}

fs.readdirSync(env.PACKAGE_PATH).forEach(ele => {
  alias[ele.replace(env.PREFIX, '@')] = path.resolve(env.PACKAGE_PATH, `./${ele}/src`)
  if (ele === `${env.PREFIX}base`) return
  entry[ele.replace(env.PREFIX, '')] = path.resolve(env.PACKAGE_PATH, `./${ele}/src/main.js`)
})

module.exports = {
  alias,
  entry,
  include: Object.values(alias)
}
