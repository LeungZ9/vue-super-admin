import ElementUI from 'element-ui'
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
    this.store_ = store(Vue, opts.store)
    this.router_ = router(Vue, opts.router, this.store_)

    Vue.use(comp.global)
    Vue.use(ElementUI, { size: 'small' })
  }
}

export default Base
