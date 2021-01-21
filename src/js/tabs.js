import { setMinutes } from './timer';
import {
  pomodoroBtn,
  shortBreakBtn,
  longBreakBtn,
  svgCircle,
} from './elements';

const setPomodoroMinutes = () => {
  setMinutes(25);
};

const setShortBreak = () => {
  setMinutes(5);
};

const setLongBreak = () => {
  setMinutes(10);
};

pomodoroBtn.addEventListener('click', () => {
  pomodoroBtn.classList.add('button');
  longBreakBtn.classList.remove('button');
  shortBreakBtn.classList.remove('button');
  svgCircle.classList.remove('animate-clock');
  setPomodoroMinutes();
});

shortBreakBtn.addEventListener('click', () => {
  pomodoroBtn.classList.remove('button');
  longBreakBtn.classList.remove('button');
  shortBreakBtn.classList.add('button');
  svgCircle.classList.remove('animate-clock');
  setShortBreak();
});

longBreakBtn.addEventListener('click', () => {
  pomodoroBtn.classList.remove('button');
  shortBreakBtn.classList.remove('button');
  longBreakBtn.classList.add('button');
  svgCircle.classList.remove('animate-clock');
  setLongBreak();
});

export { setPomodoroMinutes, setShortBreak, setLongBreak };
