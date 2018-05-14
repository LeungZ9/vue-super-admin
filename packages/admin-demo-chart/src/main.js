// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Base from 'admin-base'
import router from './router'
import chart from 'vue-echarts-lite'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'

Vue.config.productionTip = false

Vue.use(chart)

Vue.use(Base, {
  router
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
