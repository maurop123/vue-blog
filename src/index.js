import {db, auth} from "./database"

import * as components from './components'
Object.keys(components).map(key => {
  const component = components[key]
  Vue.component(component.name, component)
})

import Store from './store'
const store = Store({db, auth})

import Router from './router'
const router = Router({auth})

import {sync} from 'vuex-router-sync'
sync(store, router)

new Vue({ router, store }).$mount('#view-container')
