 let startTime;
      let elapsedTime = 0;
      let timerInterval;
      const display = document.getElementById("stopwatch-display");

      function startStopwatch() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateStopwatch, 10);
      }

      function stopStopwatch() {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
      }

      function resetStopwatch() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        display.innerHTML = "00:00:00";
      }

      function updateStopwatch() {
        const elapsedMilliseconds = Date.now() - startTime;
        const hours = Math.floor(elapsedMilliseconds / 3600000);
        const minutes = Math.floor((elapsedMilliseconds % 3600000) / 60000);
        const seconds = Math.floor((elapsedMilliseconds % 60000) / 1000);
        const milliseconds = Math.floor((elapsedMilliseconds % 1000) / 10);

        const hoursStr = hours.toString().padStart(2, "0");
        const minutesStr = minutes.toString().padStart(2, "0");
        const secondsStr = seconds.toString().padStart(2, "0");
        const millisecondsStr = milliseconds.toString().padStart(2, "0");

        display.innerHTML = `${hoursStr}:${minutesStr}:${secondsStr}.${millisecondsStr}`;
      }
