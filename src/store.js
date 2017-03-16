import Vuex from 'vuex'
import {Observable} from 'rx'

export default function({Vue, db, auth}) {
  Vue.use(Vuex)

  db.posts = db.ref('/posts')

  const Store ={
    state: {
      posts: []
    },
    getters: {
      getLatestPost({posts}) {
        return posts[posts.length-1]
      },
      getPostByUri({posts, route}) {
        const {uri}= route.params
        return (uri) ? posts.filter(post => post.uri == uri)[0] : null
      },
      getNextPost({posts, route}) {
        const {uri}= route.params
        const currIndex = posts.reduce((index, post, i) => {
          if (post.uri == uri) index = i
          return index
        }, null)
        return (currIndex >= 0 && currIndex < posts.length && currIndex+1 < posts.length) ? posts[currIndex+1] : null
      },
      getPrevPost({posts, route}) {
        const {uri}= route.params
        const currIndex = posts.reduce((index, post, i) => {
          if (post.uri == uri) index = i
          return index
        }, null)
        return (currIndex >= 0 && currIndex < posts.length && currIndex-1 >= 0) ? posts[currIndex-1] : null
      }
    },
    mutations: {
      setPosts(state, payload) {
        state.posts = payload
      },
    },
    actions: {
      setPost(context, payload) {
        if (!payload.id) payload.id = db.posts.push().key
        db.posts.child(payload.id).set(payload)
      },
      login(context, {email, password}) {
        auth.signInWithEmailAndPassword(email, password)
        return Observable.create(obs => {
          auth.onAuthStateChanged(user => {
            obs.onNext((user))
          })
        })
      },
    },
  }

  const store = new Vuex.Store(Store)

  // init
  db.posts.once('value', snap => {
    const val = (snap.val()) ? db.toArray(snap.val()) : []
    store.commit('setPosts', val)
  })

  // listen
  db.posts.on('value', snap => {
    const val = (snap.val()) ? db.toArray(snap.val()) : []
    store.commit('setPosts', val)
  })

  return store
}
