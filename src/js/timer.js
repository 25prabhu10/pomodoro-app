let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let timerBtn = document.getElementById("timer-operation");
let svgCircle = document.querySelector(".timer__progress");

timerBtn.innerHTML = "start";
svgCircle.style.animationPlayState = "paused";

timerBtn.addEventListener("click", () => {
  if (timerBtn.innerHTML === "start") {
    svgCircle.style.animationPlayState = "running";
    startTimer();
    timerBtn.innerHTML = "pause";
  }
});

const resetMinutes = () => {
  minutes.innerHTML = "00";
};

const resetHours = () => {
  hours.innerHTML = "00";
};

const resetTimer = () => {
  resetMinutes();
  resetHours();
};

const startTimer = () => {
  resetTimer();
  let tempMinutes = 1;
  let tempHours = 1;

  setInterval(function () {
    minutes.innerHTML = tempMinutes < 10 ? `0${tempMinutes}` : tempMinutes;
    tempMinutes = tempMinutes + 1;

    if (tempMinutes > 59) {
      resetMinutes();
      tempMinutes = 1;
      tempHours = tempHours + 1;
      hours.innerHTML = tempHours < 10 ? `0${tempHours}` : tempHours;
    }

    if (tempHours > 23) {
      tempHours = 1;
      tempMinutes = 1;
      hours.innerHTML = tempHours < 10 ? `0${tempHours}` : tempHours;
    }
  }, 1000);
  //   60000
  //   3600000
};
