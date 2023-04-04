 
      function showAlert() {
        alert("Hello, world!");
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
