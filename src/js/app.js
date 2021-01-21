import { startBtn, pauseBtn, stopBtn, svgCircle } from './elements';
import { startTimer, pauseTimer, stopTimer } from './timer';
import { setPomodoroMinutes } from './tabs';

window.addEventListener('load', () => {
  setPomodoroMinutes();
});

startBtn.addEventListener('click', () => {
  svgCircle.style.animationPlayState = 'running';
  svgCircle.classList.add('animate-clock');

  startTimer();

  startBtn.classList.remove('display');
  startBtn.classList.add('hidden');

  pauseBtn.classList.remove('hidden');
  pauseBtn.classList.add('display', 'margin-right-sm');

  stopBtn.classList.remove('hidden');
  stopBtn.classList.add('display', 'margin-left-sm');
});

pauseBtn.addEventListener('click', () => {
  svgCircle.style.animationPlayState = 'paused';
  pauseTimer();

  pauseBtn.classList.remove('display');
  pauseBtn.classList.add('hidden');

  startBtn.classList.remove('hidden');
  startBtn.classList.add('display', 'margin-right-sm');
});

stopBtn.addEventListener('click', () => {
  svgCircle.classList.remove('animate-clock');

  stopTimer();

  pauseBtn.classList.remove('display');
  pauseBtn.classList.add('hidden');

  stopBtn.classList.remove('display');
  stopBtn.classList.add('hidden');

  startBtn.classList.remove('hidden', 'margin-right-sm');
  startBtn.classList.add('display');
});
