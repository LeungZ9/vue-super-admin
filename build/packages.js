const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const env = require('./env')
const packages = fs.readdirSync(env.PACKAGE_PATH)
const pModule = process.env.npm_config_module

const alias = {}
const entry = {}

if (pModule) {
  const pModules = pModule.split(',')
  try {
    pModules.forEach(ele => {
      ele = ele.startsWith(env.PREFIX) ? ele : env.PREFIX + ele
      if (~packages.indexOf(ele)) {
        if (ele === `${env.PREFIX}base`) return
        alias[ele.replace(env.PREFIX, '@')] = path.resolve(env.PACKAGE_PATH, `./${ele}/src`)
        entry[ele.replace(env.PREFIX, '')] = path.resolve(env.PACKAGE_PATH, `./${ele}/src/main.js`)
      } else {
        throw ('Cannot find this module in packages.')
      }
    })
    alias[`@base`] = path.resolve(env.PACKAGE_PATH, `./${env.PREFIX}base/src`)
    console.log(chalk.cyan(`  Starting up with modules: ${Object.keys(alias).join(', ')}.`))
  } catch (e) {
    console.log(chalk.red(`  ${e}\n`))
    process.exit(1)
  }
} else {
  packages.forEach(ele => {
    alias[ele.replace(env.PREFIX, '@')] = path.resolve(env.PACKAGE_PATH, `./${ele}/src`)
    if (ele === `${env.PREFIX}base`) return
    entry[ele.replace(env.PREFIX, '')] = path.resolve(env.PACKAGE_PATH, `./${ele}/src/main.js`)
  })
}


module.exports = {
  alias,
  entry,
  include: Object.values(alias)
}
