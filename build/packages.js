const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const PACKAGE_PATH = path.resolve(__dirname, '../packages')
const PACKAGE_PERFIX = 'admin-'
let modules = process.env.npm_config_module
let packages = fs.readdirSync(PACKAGE_PATH)

function packagePath(rPath) {
  return path.resolve(PACKAGE_PATH, rPath)
}

if (modules) {
  modules = modules
    .split(',')
    .map(e => (e.startsWith(PACKAGE_PERFIX) ? e : PACKAGE_PERFIX + e))
  packages = packages.filter(e => ~modules.indexOf(e))
}

console.log(chalk.cyan(`  Modules: ${packages.join(', ')}.`))

const entry = {}
const alias = {}
packages.forEach(e => {
  const name = e.replace(PACKAGE_PERFIX, '')
  alias[`@${name}`] = packagePath(`./${e}/src`)
  entry[name] = packagePath(`./${e}/src/main.js`)
})
if (!~packages.indexOf(`${PACKAGE_PERFIX}base`)) {
  alias[`@base`] = packagePath(`./${PACKAGE_PERFIX}base/src`)
}

module.exports = {
  entry,
  alias
}
