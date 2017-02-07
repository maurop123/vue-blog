import firebase from 'firebase'
import config from './config.json'

firebase.initializeApp(config.database)

const db = firebase.database()

db.toArray = (obj) => Object.keys(obj).map(key => obj[key])

export default db
