import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import comp from './components'
import router from './router'
import store from './store'

class Base {
  constructor() {
    this.router_ = null
    this.store_ = null
  }
  get router() {
    return this.router_
  }
  get store() {
    return this.store_
  }
  get comp() {
    return comp.local
  }
  install(Vue, opts = {}) {
    this.router_ = router(Vue, opts.router)
    this.store_ = store(Vue, opts.store)

    this.router_.beforeEach(async(to, from, next) => {
      this.store_.dispatch('bsShell/loadStart')
      if (!this.store_.state.bsMenu.data.length) {
        this.store_.dispatch('bsMenu/setData', await import('./mock/menu.json'))
      }
      this.store_.dispatch('bsMenu/setCurrent', to)
      this.store_.dispatch('bsHead/setTitle', '')
      next()
    })
    this.router_.afterEach((to, from) => {
      this.store_.dispatch('bsShell/loadEnd')
    })

    Vue.use(comp.global)
    Vue.use(ElementUI, { size: 'small', locale })
  }
}

export default Base
