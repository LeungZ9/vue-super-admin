import bsHeader from './header'
import bsAside from './aside'
import bsContainer from './container'
import menuItem from './menuItem'

const local = { bsHeader, bsAside, bsContainer }

const global = {
  install(Vue) {
    Vue.component('bsMenuItem', menuItem)
  }
}

export default {
  get local() {
    return local
  },
  get global() {
    return global
  }
}
