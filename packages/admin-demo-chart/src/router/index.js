import line from '@demo-chart/components/line'
import list from '@demo-chart/components/list'

export default [
  {
    path: '/line',
    name: 'line',
    component: line
  },
  {
    path: '/long-list',
    name: 'list',
    component: list
  },
  {
    path: '*',
    redirect: { name: 'line' }
  }
]
