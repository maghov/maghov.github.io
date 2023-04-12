 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBIy7mb_wS05I_0ICLMSX1P5avFim7yXsA",
   authDomain: "chat-gtp-b0e1d.firebaseapp.com",
   databaseURL: "https://chat-gtp-b0e1d-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "chat-gtp-b0e1d",
   storageBucket: "chat-gtp-b0e1d.appspot.com",
   messagingSenderId: "617084173940",
   appId: "1:617084173940:web:e66612d6dae0337d4e9b21",
   measurementId: "G-TFJ234R5B9"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 import {getDatabase, ref, set, child, update, remove, get, onValue}
 from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"

 const db = getDatabase();


 var namebox = document.getElementById("name")
 var numberbox = document.getElementById("number")
 //var datebox = document.getElementById("inputDate")
 var datebox = document.getElementById("inputDate");
 var toDay = new Date();


 console.log('toDay' + toDay)
 console.log('datebox value' + datebox)
 var insBtn = document.getElementById("addBtn")

 function InsertDate(){
     set(ref(db, "TheStudents/"+  namebox.value),{
     NameofStd: namebox.value, 
     NumberofStd: numberbox.value, 
     Date: datebox.value,
 })
.then(() => {
console.log("Data saved successfully!")
})
.catch((error) => {
console.log("Error!")
});
 }


 const dbRef = ref(db, '/a/b/c');

onValue(dbRef, (snapshot) => {
snapshot.forEach((childSnapshot) => {
const childKey = childSnapshot.key;
const childData = childSnapshot.val();
console.log(childData)
});
}, {
onlyOnce: true
});
