export const formatTimeString = (time) => {
  return time < 10 ? `0${time}` : time;
};
