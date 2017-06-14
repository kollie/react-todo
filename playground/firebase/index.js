import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDH2UXPNRRb4kg39-uQ4VdoEOvupwrJAQM",
  authDomain: "techsol-todo-app.firebaseapp.com",
  databaseURL: "https://techsol-todo-app.firebaseio.com",
  projectId: "techsol-todo-app",
  storageBucket: "techsol-todo-app.appspot.com",
  messagingSenderId: "419176103238"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref()
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.1'
  },
  isRunning: true,
  user: {
    name: 'Israel',
    age: 24
  }
})

let todosRef = firebaseRef.child('todos')

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val())
})

todosRef.push({
  text: 'Exercise'
})

todosRef.push({
  text: 'Have lunch'
})
