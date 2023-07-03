
var currentDate = new Date();

const dateElement = document.getElementById('date');
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; 
var year = currentDate.getFullYear();

var formattedDate = day + "/" + month + "/" + year;

dateElement.textContent = formattedDate;


    const clockElement = document.getElementById('clock');

    function refreshTime() {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      const formattedTime = `${hours.toString().padStart(2, '0')}:
                            ${minutes.toString().padStart(2, '0')}:
                            ${seconds.toString().padStart(2, '0')}`;

      clockElement.textContent = formattedTime;
    }

  
    let intervalId;

  
    function startClock() {
   
      refreshTime();

     
      intervalId = setInterval(refreshTime, 1000);
    }

    
    function stopClock() {
   
      clearInterval(intervalId);
    }

  
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', startClock);
    stopBtn.addEventListener('click', stopClock);