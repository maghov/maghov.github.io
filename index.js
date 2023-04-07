
//import { initializeApp } from "firebase/app";
//import { getDatabase } from "firebase/database";

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
 import { getDatabase } from "firebase/database";

console.log('index js');

 const firebaseConfig = {
    apiKey: "AIzaSyBIy7mb_wS05I_0ICLMSX1P5avFim7yXsA",
    authDomain: "chat-gtp-b0e1d.firebaseapp.com",
    projectId: "chat-gtp-b0e1d",
    storageBucket: "chat-gtp-b0e1d.appspot.com",
    messagingSenderId: "617084173940",
    appId: "1:617084173940:web:e66612d6dae0337d4e9b21",
    measurementId: "G-TFJ234R5B9",
    databaseURL:"https://chat-gtp-b0e1d-default-rtdb.europe-west1.firebasedatabase.app/"
  };
  
const app = initializeApp(firebaseConfig);



// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// Add data to a Firebase Realtime Database location
database.ref('users').push({
    name: "John Doe",
    age: 25,
    email: "johndoe@example.com"
}, function(error) {
    if (error) {
        console.log("Error adding data: ", error);
    } else {
        console.log("Data added successfully!");
    }
});

