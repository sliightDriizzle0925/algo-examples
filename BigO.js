// const {performance} = require('perf_hooks');
// const nemo = ['nemo'];
// const everyone = ["dory", 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
// const large = new Array(100000).fill('nemo');

// function findNemo(array) {
//   for(let i = 0; i < array.length; i++){
//     if(array[i] == 'nemo'){
//       console.log("Found Nemo");
//     }
//   }
// }

// findNemo(large); // O(n) --> linear time.

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes){
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes); // O(2) --> Constant time.


//log all pairs of array.
// const boxes = ['a', 'b', 'c', 'd', 'e'];

// function logAllPairsOfArray(array) {
//   for(let i = 0; i < array.length; i++){
//     for(let j = 0; j < array.length; j++){
//       console.log(array[i], array[j]);
//     }
//   }
// }

// logAllPairsOfArray(boxes); // quadratic time. nested for loops --> O(n^2)

//instead of nest for loops, loop through first array and create object where properties === items in the array
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem(arr1, arr2){
  let map = {};
  for (let i = 0; i < arr1.length; i++){
    if(!map[arr1[i]]){
      const item = arr1[i];
      map[item] = true;
    }
  }
  // loop through second array and check if item in second array exists on created object
  for (let j=0; j < arr2.length; j++){
    if(map[arr2[j]]){
      return console.log('true');
    } 
  }
  return console.log('false');
}
//this solution is O(a + b) since it is two individual loops, it is great for time complexity
// this solution is O(a) for space complexity since we add a variable (map)
containsCommonItemClean(array1, array2);

// ^^ How to clean it up using built in functions.
function containsCommonItemClean(arr1, arr2){
  return arr1.some(item => arr2.includes(item));
}
