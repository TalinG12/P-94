
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyD6X8eZrmfX1c2bCF_jCuw3zwROy5k91UM",
      authDomain: "chatin-26e9f.firebaseapp.com",
      databaseURL: "https://chatin-26e9f-default-rtdb.firebaseio.com",
      projectId: "chatin-26e9f",
      storageBucket: "chatin-26e9f.appspot.com",
      messagingSenderId: "215825393602",
      appId: "1:215825393602:web:b3b457ed8d89cb2195185b",
      measurementId: "G-LXE4MSLDEB"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addUser() {
      user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
  purpose: "saving enviorment"
    }) ; 
  }
