import firebase from 'firebase'

try {
  var config = {
    apiKey: "AIzaSyDH2UXPNRRb4kg39-uQ4VdoEOvupwrJAQM",
    authDomain: "techsol-todo-app.firebaseapp.com",
    databaseURL: "https://techsol-todo-app.firebaseio.com",
    projectId: "techsol-todo-app",
    storageBucket: "techsol-todo-app.appspot.com",
    messagingSenderId: "419176103238"
  };

  firebase.initializeApp(config)
} catch (e) {

}

export const firebaseRef = firebase.database().ref()
export default firebase
