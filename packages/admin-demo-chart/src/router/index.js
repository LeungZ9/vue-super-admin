import line from '@demo-chart/components/line'
import scroll from '@demo-chart/components/long-list/scroll'
import intersection from '@demo-chart/components/long-list/intersection'

export default [
  {
    path: '/line',
    name: 'line',
    component: line
  },
  {
    path: '/scroll-list',
    name: 'scroll',
    component: scroll
  },
  {
    path: '/intersection-list',
    name: 'intersection',
    component: intersection
  },
  {
    path: '*',
    redirect: { name: 'line' }
  }
]
