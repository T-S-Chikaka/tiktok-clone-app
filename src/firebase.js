import firebase from 'firebase'

const firebaseConfig = {
  //no wonder eys
  }

  const firebaseApp = 
  firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db



