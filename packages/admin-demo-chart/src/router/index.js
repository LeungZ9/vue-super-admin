import line from '@demo-chart/components/line'

export default [
  {
    path: '/line',
    name: 'line',
    component: line
  },
  {
    path: '*',
    redirect: { name: 'line' }
  }
]
