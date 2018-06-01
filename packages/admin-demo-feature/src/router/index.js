import welcome from '@demo-feature/components/welcome'

export default [
  {
    path: '/welcome',
    name: 'welcome',
    component: welcome
  },
  {
    path: '*',
    redirect: { name: 'welcome' }
  }
]
