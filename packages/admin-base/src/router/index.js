import Router from 'vue-router'

let routes = []
export default (Vue, router) => {
  Vue.use(Router)
  routes = routes.concat(router)
  return new Router({ routes })
}
