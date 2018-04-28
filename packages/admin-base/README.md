# admin-base

> admin-base is a root package for admin console to render

### Components

* container
* menubar
* sidebar
* topbar

### Property

| Attribute | Usage                              |
| --------- | ---------------------------------- |
| router    | `Object`, expose router after init |
| store     | `Object`, expose store after init  |

### How to use

Initialization

```js
import Vue from 'vue'
import Base from 'admin-base'

Vue.use(Base, {
  modules               //modules in webpack context
  pages                 //routers in webpack context
})
```

Get `router` or `store` via import

```js
import base from "admin-base"

const router = base.router
const store = base.store
```
