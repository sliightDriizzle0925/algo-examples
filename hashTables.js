// imdempotent -- a function given an input always returns the same output. Hash generators use a special string of 'gibberish' for memory addresses

// let user = {
//   age: 54,
//   name: 'kylee',
//   magic: true,
//   scream: function () {
//     return 'ahhhhhhh';
//   }
// }

// console.log(user.age); // O(1);
// user.spell = 'abra kadabra'; // O(1);
// console.log(user.scream()); // O(1)

// hash collisions occur when the hash function stores something in an existing reserved spot in memory. Creates a linked list. Slows down the hash because hash[1] now has 
// hash[1][5]. Becomes O(n/k) where K is size of the hash. Drop the constants and we have O(n), no longer O(1).

// Map allow any data type to be a key. Objects only allow for string keys. Maps maintain insertion order. Objects can be separated in memory.


// class HashTable {
//   constructor(size){
//     this.data = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }
//     console.log(hash)
//     return hash;
//   }
//   set(key, value) {
//     let address = this._hash(key);
//     if(!this.data[address]){
//       this.data[address] = [];
//     }
//     this.data[address].push(key, value);
//     return this.data;
//   }
//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     console.log(currentBucket);
//     if(currentBucket){
//       for(let i = 0; i < currentBucket.length; i++){
//         console.log(currentBucket[i])
//         if(currentBucket[i][0] == key){
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 54);
// console.log(myHashTable.get('grapes'));

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] == input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

function firstRecurringCharacter2(input){
  let map = {};
  for (let i = 0; i < input.length; i++){
    if(map[input[i]] !== undefined)  {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  console.log(map);
  return undefined;
}

console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));