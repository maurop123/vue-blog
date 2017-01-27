import homepage from './home.page'
import editorPage from './editor.page'

const routes = [
  { path: '/', redirect: '/blog'},
  { path: '/blog', component: homepage },
  { path: '/blog/:uri', component: homepage },
  { path: '/editor', name: 'editor', component: editorPage }
]

export default routes
