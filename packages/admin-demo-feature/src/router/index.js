import shell from '@demo-feature/components/shell'
import cmList from '@demo-feature/components/child-menu/list'
import cmDetail from '@demo-feature/components/child-menu/detail'
import cmMore from '@demo-feature/components/child-menu/more'
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
    path: '/child-menu',
    name: 'cmList',
    component: cmList
  },
  {
    path: '/child-menu/:name',
    name: 'cmDetail',
    component: cmDetail
  },
  {
    path: '/child-menu/:name/more',
    name: 'cmMore',
    component: cmMore
  },
  {
    path: '/shell',
    name: 'shell',
    component: shell
  },
  {
    path: '*',
    redirect: { name: 'cpList' }
  }
]
