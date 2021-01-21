import { minutes, seconds } from "./elements";
import { formatTimeString } from "./util";

let interval;
let globalMinutes;

let state = "stopped";

const resetSeconds = () => {
  seconds.innerHTML = "00";
};

const resetMinutes = () => {
  minutes.innerHTML = globalMinutes;
};

const timer = () => {
  let tempSeconds = 59;
  let tempMinutes = globalMinutes;

  interval = setInterval(function () {
    if (state === "running") {
      seconds.innerHTML = formatTimeString(tempSeconds);
      tempSeconds = tempSeconds - 1;

      if (tempSeconds < 55) {
        resetSeconds();
        tempSeconds = 59;
        tempMinutes = tempMinutes - 1;
        minutes.innerHTML = formatTimeString(tempMinutes);
      }

      if (tempMinutes < 0) {
        tempMinutes = 59;
        tempSeconds = 59;
        minutes.innerHTML = formatTimeString(tempMinutes);
      }
    }
  }, 1000);
};

export const setMinutes = (min) => {
  globalMinutes = min;
  resetTimer();
};

export const resetTimer = () => {
  resetSeconds();
  resetMinutes();
};

export const startTimer = () => {
  if (state === "stopped") {
    state = "running";
    resetTimer();
    timer();
  } else if (state === "paused") {
    state = "running";
  }
};

export const pauseTimer = () => {
  state = "paused";
};

export const stopTimer = () => {
  state = "stopped";
  clearInterval(interval);
  interval = false;
  resetTimer();
};
