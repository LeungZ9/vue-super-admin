// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Base from 'admin-base'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Base, {
  router,
  store
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Base.router,
  store: Base.store,
  render: h => {
    const r_ = []
    const keys = Object.keys(Base.comp)
    keys.forEach(key => {
      r_.push(h(key))
    })
    return h('div', {}, r_)
  },
  components: Base.comp
})
