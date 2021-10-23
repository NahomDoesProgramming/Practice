var firebaseConfig = {
    apiKey: "AIzaSyC9febsNBOnHXCh-wc7w-n9pEyzIkxyTjI",
    authDomain: "kwitter-d585a.firebaseapp.com",
    databaseURL: "https://kwitter-d585a-default-rtdb.firebaseio.com",
    projectId: "kwitter-d585a",
    storageBucket: "kwitter-d585a.appspot.com",
    messagingSenderId: "741452678462",
    appId: "1:741452678462:web:fe9a5b8d9e26ed7af9586f",
    measurementId: "G-CR64FNWZVE"
  };
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      username = document.getElementById("username").value;
      firebase.database().ref("/").child(username).update
      ({
         purpose: "adding user"
      });
  }