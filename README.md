# vue-super-admin

> vue-super-admin is an admin console demo, based on [Vue.js](https://github.com/vuejs/vue) and use the UI Toolkit -- [element](https://github.com/ElemeFE/element), to reduce coupling with multiple module in a huge platform

https://www.youtube.com/watch?v=ZZmUwXEiPm4
https://pic1.zhimg.com/80/v2-bcadbd396f87f32009ba81b05e2fcf1c_hd.jpg
https://pic3.zhimg.com/80/v2-8f224d5e5bef950f787a821f735abcf6_hd.jpg
如上文所述，这里存在一个中心化 import 带来的问题。

带有路由器和3个根组件的示例依赖关系树。由路由引入根组件。
因为现在路由必须 import 所有的根组件，所以当你想删除其中一个（组件）时，你必须前往路由（所在的文件），删除所有 import 关系以及相应路径，于是你遇到了“2017年假日特别问题”。

Import -> Enhance
在 Google，我们已经为此提出了一个解决方案，在此向你们介绍一下，我想之前我们从来没有公开谈过这件事。我们创造了一个新概念，它被称为 enhance。你可以用它来替代 import。

实际上，它与 import 正好相反。它是一个逆向依赖。如果你 enhance 一个模块，你会让这个模块对你产生依赖。

带有路由器和3个根组件的示例依赖关系树。根组件增强了路由。
看看依赖关系图发生了什么，组件保持不变，但箭头指向相反的方向。因此，根组件会对路由使用 enhance 方式来声明自己，以取代让路由 import 根组件的方式。这意味着当我删除根组件时我仅需要删除相应文件即可。因为它不再 enhance 路由，当我们删除组件时，这是唯一需要做的操作。

---
## A large JavaScript Application - multiple platform within one portal
Here is the architecture:
