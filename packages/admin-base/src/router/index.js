import Router from 'vue-router'
import error from './error'

function catchExc(code, next) {
  switch (code) {
    case 401:
      next({ name: 'bsError.401' })
      break
  }
}

export default (Vue, r, store) => {
  Vue.use(Router)
  let router = new Router({ routes: error.concat(r) })

  router.beforeEach(async(to, from, next) => {
    if (!store.state.bsMenu.data.length) {
      let data = sessionStorage.getItem('bs-menu-data')
      if (data) {
        data = JSON.parse(data)
      } else {
        data = await import('@base/mock/menu.json')
        sessionStorage.setItem('bs-menu-data', JSON.stringify(data))
      }
      store.dispatch('bsMenu/setData', data)
    }
    if (~to.name.indexOf('bsError.')) return next()

    let code = 0
    store.dispatch('bsShell/loadStart')
    store.dispatch('bsMenu/setCurrent', to)
    store.dispatch('bsHead/setTitle', '')

    if (!store.state.bsMenu.current.length) code = 401

    code ? catchExc(code, next) : next()
  })
  router.afterEach((to, from) => {
    store.dispatch('bsShell/loadEnd')
  })
  return router
}
