import VueRouter from 'vue-router'
import Routes from './routes'

export default function ({Vue, auth}) {
  Vue.use(VueRouter)

  const routes = Routes({auth})

  const router = new VueRouter({
    routes,
    mode: 'history'
  })

  return router
}
