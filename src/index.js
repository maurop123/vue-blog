import * as components from './components'
import {sync} from 'vuex-router-sync'

Object.keys(components).map(key => {
  const component = components[key]
  Vue.component(component.name, component)
})

import router from './router'
import Store from './store'
const store = new Vuex.Store(Store)
Store.init(store)
Store.listen(store)

sync(store, router)

new Vue({ router, store }).$mount('#view-container')
