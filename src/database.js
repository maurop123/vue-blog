import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyBaDMTMKZVFS1iS5oSWfMVvKB6akWODNUg",
  authDomain: "mptysquare-295ed.firebaseapp.com",
  databaseURL: "https://mptysquare-295ed.firebaseio.com",
  storageBucket: "mptysquare-295ed.appspot.com",
  messagingSenderId: "59554296307"
})

const db = firebase.database()

db.toArray = (obj) => Object.keys(obj).map(key => obj[key])

export default db
