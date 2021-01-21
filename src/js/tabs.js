import { setMinutes } from "./timer";
import {
  pomodoroBtn,
  shortBreakBtn,
  longBreakBtn,
  svgCircle,
} from "./elements";

pomodoroBtn.addEventListener("click", () => {
  pomodoroBtn.classList.add("button");
  longBreakBtn.classList.remove("button");
  shortBreakBtn.classList.remove("button");
  svgCircle.classList.remove("animate-clock");
  setPomodoroMinutes();
});

shortBreakBtn.addEventListener("click", () => {
  pomodoroBtn.classList.remove("button");
  longBreakBtn.classList.remove("button");
  shortBreakBtn.classList.add("button");
  svgCircle.classList.remove("animate-clock");
  setShortBreak();
});

longBreakBtn.addEventListener("click", () => {
  pomodoroBtn.classList.remove("button");
  shortBreakBtn.classList.remove("button");
  longBreakBtn.classList.add("button");
  svgCircle.classList.remove("animate-clock");
  setLongBreak();
});

export const setPomodoroMinutes = () => {
  setMinutes(25);
};

export const setShortBreak = () => {
  setMinutes(5);
};

export const setLongBreak = () => {
  setMinutes(10);
};
