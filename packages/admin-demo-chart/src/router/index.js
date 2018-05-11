import chart from '@demo-chart/components/chart'

export default [
  {
    path: '/chart',
    name: 'chart',
    component: chart
  },
  {
    path: '*',
    redirect: { name: 'chart' }
  }
]
