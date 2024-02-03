const letters = ['a', 'r', 'z', 'g', 'u', 'p'];
const baskets = [2, 65, 34, 2, 1, 7, 8];

letters.sort();
baskets.sort();

baskets.sort(function (a, b) {
  return a-b;
})