import shell from '@demo-feature/components/shell'
import cmList from '@demo-feature/components/child-menu/list'
import cmDetail from '@demo-feature/components/child-menu/detail'
import cmMore from '@demo-feature/components/child-menu/more'
import cpList from '@demo-feature/components/child-page/list'
import cpDetail from '@demo-feature/components/child-page/detail'
import permission from '@demo-feature/components/permission/permission'
import permissionTest from '@demo-feature/components/permission/permissionTest'
import nrIndex from '@demo-feature/components/nest-router/index'
import nrProfile from '@demo-feature/components/nest-router/post'
import nrPosts from '@demo-feature/components/nest-router/profile'

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
    path: '/permission',
    name: 'permission',
    component: permission
  },
  {
    path: '/permission/test',
    name: 'permissionTest',
    component: permissionTest
  },
  {
    path: '*',
    redirect: { name: 'cpList' }
  },
  {
    path: '/nest-router',
    component: nrIndex,
    name: 'nestRouter',
    children: [
      {
        path: 'profile',
        component: nrProfile
      },
      {
        path: 'posts',
        component: nrPosts
      }
    ]
  }
]
