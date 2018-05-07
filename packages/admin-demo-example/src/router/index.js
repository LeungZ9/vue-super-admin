import form from '@demo-example/components/form'
import dialog from '@demo-example/components/dialog'
import tabs from '@demo-example/components/tabs'
import table from '@demo-example/components/table'

export default [
  {
    path: '/dialog',
    name: 'dialog',
    component: dialog
  },
  {
    path: '/form',
    name: 'form',
    component: form
  },
  {
    path: '/table',
    name: 'table',
    component: table
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs
  }
]
