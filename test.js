// in javascript, how to select two items from array[10, 20, 30, 40] in random

const array = [10, 20, 30, 40];

const selectRandomItems = (arr, n) => {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, n);
};

const selectedItems = selectRandomItems(array, 3);

console.log(selectedItems);
