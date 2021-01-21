import { minutes, seconds } from './elements';
import util from './util';

let interval;
let globalMinutes;

let state = 'stopped';

const resetSeconds = () => {
  seconds.innerHTML = '00';
};

const resetMinutes = () => {
  minutes.innerHTML = globalMinutes;
};

const timer = () => {
  let tempSeconds = 59;
  let tempMinutes = globalMinutes;

  interval = setInterval(() => {
    if (state === 'running') {
      seconds.innerHTML = util.formatTimeString(tempSeconds);
      tempSeconds -= 1;

      if (tempSeconds < 0) {
        resetSeconds();
        tempSeconds = 59;
        tempMinutes -= 1;
        minutes.innerHTML = util.formatTimeString(tempMinutes);
      }

      if (tempMinutes < 0) {
        tempMinutes = 59;
        tempSeconds = 59;
        minutes.innerHTML = util.formatTimeString(tempMinutes);
      }
    }
  }, 1000);
};

const resetTimer = () => {
  resetSeconds();
  resetMinutes();
};

const setMinutes = (min) => {
  globalMinutes = min;
  resetTimer();
};

const startTimer = () => {
  if (state === 'stopped') {
    state = 'running';
    resetTimer();
    timer();
  } else if (state === 'paused') {
    state = 'running';
  }
};

const pauseTimer = () => {
  state = 'paused';
};

const stopTimer = () => {
  state = 'stopped';
  clearInterval(interval);
  interval = false;
  resetTimer();
};

export { resetTimer, setMinutes, startTimer, pauseTimer, stopTimer };
