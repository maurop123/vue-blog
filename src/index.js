import Vue from 'vue'
import {db, auth} from "./database"

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement);

import * as components from './components'
Object.keys(components).map(key => {
  const component = components[key]
  Vue.component(component.name, component)
})

import * as customElements from './custom.elements.js'
Object.keys(customElements).map(key => {
  const element = customElements[key]
  Vue.customElement(element.name, element)
})

import Store from './store'
const store = Store({Vue, db, auth})

import Router from './router'
const router = Router({Vue, auth})

import {sync} from 'vuex-router-sync'
sync(store, router)

import App from './app.js'


new Vue(Object.assign(
  {
    el:'#app',
    router,
    store,
  },
  App
))
