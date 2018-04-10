import Rebase from 're-base';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBXszHLS_T4UJWibQJOrTUo3zx7puz6bRk",
  authDomain: "atten-done.firebaseapp.com",
  databaseURL: "https://atten-done.firebaseio.com",
  projectId: "atten-done",
  storageBucket: "",
  messagingSenderId: "69786884548"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { app, base, }
