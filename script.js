initializeFirebase();
function initializeFirebase(){
console.log('initFirebase');
// var  Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyBIy7mb_wS05I_0ICLMSX1P5avFim7yXsA",
    authDomain: "chat-gtp-b0e1d.firebaseapp.com",
    projectId: "chat-gtp-b0e1d",
    storageBucket: "chat-gtp-b0e1d.appspot.com",
    messagingSenderId: "617084173940",
    appId: "1:617084173940:web:e66612d6dae0337d4e9b21",
    measurementId: "G-TFJ234R5B9"
  };
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
var database = firebase.database();

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


}



let timer;
let resultNumber = 0;
const resultTable = document.getElementById("result-table-body");
const addedDates = [];

function addItem() {
 // Check if input date is provided
  console.log('addItem function is running');

 if (!document.getElementById("input-date").value) {
   alert("Please provide a valid input date!");
   return;
 }

 // Get the input date from the text field and convert to ISO 8601 format
 const inputDate = new Date(document.getElementById("input-date").valueAsNumber).toISOString();

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
 const dateCell = newRow.insertCell(1);
 const daysCell = newRow.insertCell(2);
 const descCell = newRow.insertCell(3);
 numberCell.innerHTML = ++resultNumber;
 descCell.innerHTML = name;
 dateCell.innerHTML = dateString;
 daysCell.innerHTML = days;
 

 // Add the input date to the addedDates array
 addedDates.push(inputDate);

 // Reset the input date field
 document.getElementById("input-date").value = "";

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
 console.log('this function is running');
    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

