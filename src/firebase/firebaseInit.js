import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'
const settings = {timestampsInSnapshots: true}
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings(settings)
export default firebaseApp.firestore()
