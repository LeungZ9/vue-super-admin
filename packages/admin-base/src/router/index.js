import Router from 'vue-router'

export default (Vue, r) => {
  let routes = []
  Vue.use(Router)

  routes = routes.concat(r)
  return new Router({ routes })
}
