import Router from 'vue-router'

let routes = []
export default (Vue, r) => {
  Vue.use(Router)

  routes = routes.concat(r)
  return new Router({ routes })
}
