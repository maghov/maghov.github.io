 
      function showAlert() {
        alert("Hello, world!");
      }
  

      let timer;
      let resultNumber = 0;
      const resultTable = document.getElementById("result-table-body");
      const addedDates = [];
      
      function startTimer() {
        // Check if input date is provided
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
        const shortDescription = document.getElementById("short-description").value;
          
        // Add the result to the table
        const newRow = resultTable.insertRow(0);
        const numberCell = newRow.insertCell(0);
        const dateCell = newRow.insertCell(1);
        const daysCell = newRow.insertCell(2);
        const descCell = newRow.insertCell(3);
        numberCell.innerHTML = "#" + ++resultNumber;
        dateCell.innerHTML = dateString;
        daysCell.innerHTML = days;
        descCell.innerHTML = shortDescription;
        
        // Add the input date to the addedDates array
        addedDates.push(inputDate);
        
  // Reset the input date field
        document.getElementById("input-date").value = "";
        
        // Stop the timer
        clearInterval(timer);
        
      }