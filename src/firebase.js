import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCHLbvdkPG4izezt4XmYPyFOzqcEmXLvm8",
    authDomain: "pets-a0a5d.firebaseapp.com",
    databaseURL: "https://pets-a0a5d.firebaseio.com",
    projectId: "pets-a0a5d",
    storageBucket: "",
    messagingSenderId: "178730153162"
  };

  export default firebase.initializeApp(config);