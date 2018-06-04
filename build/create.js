const inquirer = require('inquirer')
const Metalsmith = require('metalsmith')
const render = require('consolidate').handlebars.render
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const env = require('./env')

const templatePath = path.resolve(__dirname, './.template')
const packages = fs.readdirSync(env.PACKAGE_PATH)

inquirer.prompt([{
  type: 'input',
  name: 'name',
  message: `Project name: ${env.PREFIX}`,
  validate(input) {
    return new Promise((resolve, reject) => {
      if (~packages.indexOf(env.PREFIX + input)) {
        reject(`${env.PREFIX + input} is exist!`)
      } else {
        resolve(true)
      }
    })
  }
}, {
  type: 'input',
  name: 'description',
  message: 'Description:'
}, {
  type: 'input',
  name: 'author',
  message: 'Author:'
}]).then(aws => {
  aws.prefix = env.PREFIX
  Metalsmith(templatePath)
    .clean(false)
    .metadata(aws)
    .source('.')
    .destination(path.resolve(env.PACKAGE_PATH, `./${aws.prefix + aws.name}`))
    .use(async (files, metalsmith, done) => {
      const data = metalsmith.metadata()
      try {
        await Promise.all(Object.keys(files).map(async file => {
          const str = files[file].contents.toString()
          if (!/{{([^{}]+)}}/g.test(str)) return
          render(str, data, (err, res) => {
            if (err) {
              err.message = `[${file}] ${err.message}`
              throw (err)
            }
            files[file].contents = new Buffer.from(res)
          })
        }))
        done()
      } catch (e) {
        console.log(chalk.red(`  ${e.message}\n`))
        process.exit(1)
      }
    }).build(err => {
      console.log(chalk.cyan('  Generate complete, please run npm install again'))
      console.log(chalk.cyan(`  For this module access permission, please add item into (Default: /packages/${env.PREFIX}base/src/mock/menu.json)\n`))
    })
})
