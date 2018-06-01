import welcome from '@{{name}}/components/welcome'

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
