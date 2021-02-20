//references for the dom elements
const clockRef = document.getElementById("clock");
const dateRef = document.getElementById("date");
const startBtnRef = document.getElementById("start");
const stopBtnRef = document.getElementById("stop");

let clockInterval,
  dateObj,
  hours,
  minutes,
  seconds,
  date,
  month,
  year,
  clockRunning = false;

//makes the string of length 2
const modifyString = (str) => {
  return str.length === 2 ? str : `0${str}`;
};

const startClock = () => {
  if (!clockRunning) {
    clockRunning = true;
    clockInterval = setInterval(() => {
      dateObj = new Date();

      hours = dateObj.getHours().toString();
      minutes = dateObj.getMinutes().toString();
      seconds = dateObj.getSeconds().toString();
      date = dateObj.getDate().toString();
      month = (dateObj.getMonth() + 1).toString(); // monts are indexed from 0; that's why adding 1 to it
      year = dateObj.getFullYear().toString();

      //appending 0 before if the number is of single digit
      hours = modifyString(hours);
      minutes = modifyString(minutes);
      seconds = modifyString(seconds);
      date = modifyString(date);
      month = modifyString(month);

      //setting the current time
      clockRef.textContent = `${hours} : ${minutes} : ${seconds} `;

      dateRef.textContent = `${date} / ${month} / ${year} `;
    }, 1000);
  }
};

const stopClock = () => {
  if (clockRunning) {
    clearInterval(clockInterval);
    clockRunning = false;
  }
};

startBtnRef.addEventListener("click", startClock);
stopBtnRef.addEventListener("click", stopClock);

//starting the clock for the first time
startClock();
