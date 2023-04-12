
let timer;
let resultNumber = 0;
const resultTable = document.getElementById("result-table-body");
const addedDates = [];

console.log('scrip.js is running')

////////////////////////////
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

////////////////////////

function addItem() {
 // Check if input date is provided
  console.log('addItem function is running');

 if (!document.getElementById("inputDate").value) {
   alert("Please provide a valid input date!!!!");
   return;
 }

 // Get the input date from the text field and convert to ISO 8601 format
 const inputDate = new Date(document.getElementById("inputDate").valueAsNumber).toISOString();

 // Check if the date has already been added
 if (addedDates.includes(inputDate)) {
   alert("This date has already been added to the table!");
   return;
 }

 // Calculate the time difference
 const startDate = new Date(inputDate);
 const options = { year: 'numeric', month: 'long', day: 'numeric' };
 const dateString = startDate.toLocaleDateString('nb-NO', options);
 const currentDate = new Date();
 const timeDiff = currentDate - startDate;

 // Calculate the number of days and hours
 const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
 const name = document.getElementById("name").value;

 // Add the result to the table
 const newRow = resultTable.insertRow(0);
 const numberCell = newRow.insertCell(0);
 const descCell = newRow.insertCell(1);
 const dateCell = newRow.insertCell(2);
 const daysCell = newRow.insertCell(3);
 numberCell.innerHTML = ++resultNumber;
 descCell.innerHTML = name;
 dateCell.innerHTML = dateString;
 daysCell.innerHTML = days;
 

 // Add the input date to the addedDates array
 addedDates.push(inputDate);

 // Reset the input date field
 document.getElementById("inputDate").value = "";

 // Stop the timer
 clearInterval(timer);
}

function clearTable() {
 const resultTable = document.getElementById("result-table-body");
 resultTable.innerHTML = "";
 resultNumber = 1;
 const email = 'test1234';
saveToFirebase(email);
}



function saveToFirebase(email) {
    var emailObject = {
        email: email
    };
 console.log('thsaveToFirebaseis function is running');
    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

