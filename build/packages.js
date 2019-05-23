const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const env = require('../config/package.env')
let modules = process.env.npm_config_module
let packages = fs.readdirSync(env.PACKAGE_PATH)

function packagePath(rPath) {
  return path.resolve(env.PACKAGE_PATH, rPath)
}

if (modules) {
  modules = modules
    .split(',')
    .map(e => (e.startsWith(env.PREFIX) ? e : env.PREFIX + e))
  packages = packages.filter(e => ~modules.indexOf(e))
}

console.log(chalk.cyan(`  Starting up with modules: ${packages.join(', ')}.`))

const entry = {}
const alias = {}
if (!~packages.indexOf(`${env.PREFIX}base`)) {
  packages.push(`${env.PREFIX}base`)
}
packages.forEach(e => {
  const name = e.replace(env.PREFIX, '')
  alias[`@${name}`] = packagePath(`./${e}/src`)
  entry[name] = packagePath(`./${e}/src/main.js`)
})

delete entry.base

module.exports = {
  entry,
  alias,
  include: Object.values(alias)
}
