import Vuex from 'vuex'
import bsMenu from './modules/menu'
import bsShell from './modules/shell'
import bsHead from './modules/head'

export default (Vue, s) => {
  Vue.use(Vuex)

  return new Vuex.Store({
    modules: Object.assign({}, s, {
      bsMenu,
      bsShell,
      bsHead
    }),
    strict: process.env.NODE_ENV === 'development'
  })
}
