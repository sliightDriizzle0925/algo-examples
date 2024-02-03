// Arrays are good for access, or adding/deleting from the end. Manipulating the data from anywhere but the very end is more complex.

const strings = ['a', 'b', 'c', 'd'];
// 4 items in 32-bit, 4 items with 4 shelves per item, 4*4 = 16 bytes of storage

// strings[2] = c; grabs the 3rd item

// push adds to end of array
strings.push('e'); // O(1)

// pop removes item at end of array
strings.pop(); // 0(1)
strings.pop();

//unshift adds to the start of array
strings.unshift('x'); // O(n), each element has to be moved 1 by 1 so the complexity is dependent on length

//splice adds to middle of array
strings.splice(2, 0, 'alien'); // O(n), same as unshift but it doesn't start at the beginning

//console.log(strings);


// static arrays have predefined size, but JS uses all dynamic arrays.
// Dynamic arrays are treated like static arrays in JS
// Dynamic arrays use append(), which can be O(1) or O(n). The reason it is both is because adding the index is one operation, but since arrays stored in memory are sequential
// - the array will be copied and moved somewhere with enough space for the new array.


// Build an array from scratch
// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }
//   get(index){
//     return this.data[index];
//   }
//   push(item){
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop(){
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }
//   shiftItems(index) {
//     for(let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length-1];
//     this.length--;
//   }
// }
// const newArr = new MyArray();
// newArr.push('cheese');
// newArr.push('burger')
// newArr.push('fries');
// console.log(newArr.data);
// //newArr.pop();
// newArr.delete(1);
// console.log(newArr.data);

// function reverse(str) {
//   if (!str || str.length < 2 || typeof str !== 'string') {
//     return 'this is not a string'
//   } else {
//     let reversedString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversedString = reversedString + str[i];
//     }
//     return reversedString;
//   }
// }

// var string = "Reverse me please :(";
// console.log(reverse(string));

function mergeSortedArrays(arr1, arr2) {
  let newArr = [];
  for(let i = 0; i < arr1.length; i++){
    newArr.push(arr1[i]);
  }
  for(let j = 0; j < arr2.length; j++){
    newArr.push(arr2[j]);
  }
  newArr.sort(function(a, b){return a-b});
  return newArr;
}
console.log(mergeSortedArrays([0,3,4,31], [4,6,30]));
