// vue.config.js
const build = require('./build/build.js')
const serve = require('./build/serve.js')
const env = process.env.NODE_ENV
let config = ''

if(env === 'production'){
  config = build
}
if(env === 'development'){
  config = serve
}

module.exports = config
