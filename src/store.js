import database from "./database"

const db = {
  posts: database.ref('/posts')
}

const Store = {
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
    }
  },
  init(store) {
    db.posts.once('value', snap => {
      const val = (snap.val()) ? database.toArray(snap.val()) : []
      store.commit('setPosts', val)
    })
  },
  listen(store) {
    db.posts.on('value', snap => {
      const val = (snap.val()) ? database.toArray(snap.val()) : []
      store.commit('setPosts', val)
    })
  }
}


export default Store
