# vue-super-admin

> vue-super-admin is an admin console demo, based on [Vue.js](https://github.com/vuejs/vue) and use the UI Toolkit -- [element](https://github.com/ElemeFE/element), to reduce coupling with multiple platform in a huge portal.

## A large JavaScript Application - multiple platform within one portal

### Background
In most of our system components, there are different teams to develop platform for corresponding component, below is an example of what I have been through:
<pre>
                ________        ________        ________        ________
               |        |      |        |      |        |      |        |
  Component    | DevOps |      |  DCOS  |      |  UDAL  |      |  ....  |
               |________|      |________|      |________|      |________|
                    |               |               |               |
                ___\|/_____________\|/_____________\|/_____________\|/__
               |                     API Gateway                        |
               |________________________________________________________|
                                           |
                     ______________________|________________________
                    |               |               |               |
                    |               |               |               |
                ___\|/__        ___\|/__        ___\|/__        ___\|/__
               |        |      |        |      |        |      |        |
      FE       | DevOps |      |  DCOS  |      |  UDAL  |      |  ....  |
               | Admin  |      |  Admin |      |  Admin |      |  Admin |
               |________|      |________|      |________|      |________|
</pre>
In fact, there are some of the same logic codes about theme, privilege, data process in these management platforms if in one portal.

### Architecture
There are two major packages here.
1. Admin Base package: Admin Base is a root package to inject basic logic for every module package.
2. Admin Module package: Admin Module is a platform or component module package to implement self business logic.

Below is relationship between Admin Base and Admin Modules:
<pre>
                                    ______________
                                   |              |
                                   |  Admin Base  |
                                   |______________|
                                          /|\
                                    import |
            _______________________________|______________________________
           |                    |                    |                    |
           |                    |                    |                    |
   ________|_______     ________|_______     ________|_______     ________|_________
  |                |   |                |   |                |   |                  |
  | Admin Module 1 |   | Admin Module 2 |   | Admin Module 3 |   | Admin Module ... |
  |________________|   |________________|   |________________|   |__________________|
</pre>

For every module, it is like a single page application and only load self module and Admin Base as below:
<pre>
   _______________     ________________     ________________     ________________     __________________
  |               |   |                |   |                |   |                |   |                  |
  | Admin Base    |   | Admin Module 1 |   | Admin Module 2 |   | Admin Module 3 |   | Admin Module ... |
  |_______________|   |________________|   |________________|   |________________|   |__________________|
        /|\                   /|\                  /|\                  /|\                   /|\
         |                     |                    |                    |                     |
         |                     |                    |                    |                     |
         |             ________|_______     ________|_______     ________|_______     _________|________
         |            |                |   |                |   |                |   |                  |
         |            | Admin Module 1 |   | Admin Module 2 |   | Admin Module 3 |   | Admin Module ... |
         |            |   index.html   |   |   index.html   |   |   index.html   |   |    index.html    |
         |            |________________|   |________________|   |________________|   |__________________|
         |_____________________|____________________|____________________|_____________________|
</pre>

### How to use
1. create your module package, run below commad and input package info.
```bash
    npm run create
```

