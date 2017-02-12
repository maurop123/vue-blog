import homepage from './home.page'
import editor from './editor.page'
import login from './login.page'

export default function ({auth}) {
  return [
    { path: '/', redirect: '/blog'},
    { path: '/blog', component: homepage },
    { path: '/blog/:uri', component: homepage },
    { path: '/editor', name: 'editor', component: editor,
      beforeEnter(to, from, next) {
        setTimeout( function() { // because firebase auth lags
          if (auth.currentUser !== null) next()
          else next('/login')
        }, 1000)
      }
    },
    { path: '/login', name: 'login', component: login },
  ]
}
