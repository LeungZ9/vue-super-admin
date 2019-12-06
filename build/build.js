const conf = process.env.npm_config_conf

if(package === 'base') {
  module.exports = {
    pages: entry,
    chainWebpack: config => {
      config.resolve.alias.delete('@')
      config.resolve.alias.set(i, alias[i])
    }
  }
} else {

}
