import Routes from './routes'

export default function ({auth}) {
  const routes = Routes({auth})

  const router = new VueRouter({
    routes,
    mode: 'history'
  })

  return router
}
