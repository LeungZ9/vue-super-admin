import Vuex from 'vuex'
import bsMenu from './modules/menu'
import bsShell from './modules/shell'

export default (Vue, s) => {
  Vue.use(Vuex)

  return new Vuex.Store({
    modules: Object.assign({}, s, {
      bsMenu,
      bsShell
    }),
    strict: process.env.NODE_ENV === 'development'
  })
}
