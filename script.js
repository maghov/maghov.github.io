
let timer;
let resultNumber = 0;
const resultTable = document.getElementById("result-table-body");
const addedDates = [];

var newNumber = '1'

console.log('scrip.js is runningv3')
console.log('isRoundNumber TEST' + isRoundNumber('230'))
function isRoundNumber(number) {
            console.log('isRoundNumber' + number % 100 === 0)
                return number % 100 === 0;
            }

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


/*function updateNumberCount(){
  console.log('updateNumberCount function is running');
 // Get the circle container element
  const circleContainer = document.getElementById('countBtn');

  // Function to create a circle element
  /*function createCircle(number) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = number;
    return circle;
  }*/

  //circleContainer.innerText = 'New Value';

  // Append the circle to the container element
  //circleContainer.appendChild(newCircle);'*/
