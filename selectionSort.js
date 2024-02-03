const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// function selectionSort(array) {
//   let length = array.length;
//   for(let i = 0; i < length; i++) {
//     let smallest = array[i];
//     let temp1 = array[i];
//     let temp2;
//     console.log(smallest);
//     for(let j = i; j < length; j++) {
//       if(smallest > array[j]) {
//         temp1 = array[i];
//         temp2 = array[j];
//         smallest = temp1;
//       } 
//     }
//     array[i] = temp2;
//   }
//   return array;
// }
function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++) {
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++) {
      if(array[j] < array[min]){
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
selectionSort(numbers);