import cpList from '@demo-feature/components/child-page/list'
import cpDetail from '@demo-feature/components/child-page/detail'

export default [
  {
    path: '/child-page',
    name: 'cpList',
    component: cpList
  },
  {
    path: '/child-page/:name',
    name: 'cpList.detail',
    component: cpDetail
  },
  {
    path: '*',
    redirect: { name: 'cpList' }
  }
]
