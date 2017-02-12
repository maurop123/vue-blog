import firebase from 'firebase'
import config from './config.json'

firebase.initializeApp(config.database)

export const db = firebase.database()
db.toArray = (obj) => Object.keys(obj).map(key => obj[key])

export const auth = firebase.auth()
