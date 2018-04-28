import ElementUI from 'element-ui'
import components from './components'
import router from './router'

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
    return components
  }
  install(Vue, opts = {}) {
    this.router_ = router(Vue, opts.router)
    Vue.use(ElementUI, { size: 'small' })
  }
}

export default Base
