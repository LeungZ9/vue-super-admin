import form from '@demo-example/components/form'
import dialog from '@demo-example/components/dialog'
import tab from '@demo-example/components/tab'
import table from '@demo-example/components/table'

export default [
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
    path: '/tab',
    name: 'tab',
    component: tab
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: dialog
  }
]
