export const shuffle = arr => arr.sort(() => 0.5 - Math.random());

export const sleep = function(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
