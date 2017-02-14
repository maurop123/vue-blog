import homepage from './home.page'
import editorPage from './editor.page'
import postPage from './post.page'

const routes = [
  { path: '/', redirect: '/blog'},
  { path: '/blog', component: homepage },
  { path: '/blog/:uri', component: postPage },
  { path: '/editor', name: 'editor', component: editorPage }
]

export default routes
