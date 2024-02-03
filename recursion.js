//bad
// function inception() {
//   inception();
// }

// good way
// let counter = 0;
// function inception(){
//   if(counter > 3){
//     return 'done';
//   }
//   console.log(counter);
//   counter++;
//   return inception();
// }
// inception();


// 1. Identify base case
// 2. Identify the recursive case
// 3. Get closer and closer and return when needed. Usually have two returns

// function findRecursiveFactorial(input){
//   let counter = 2;
//   let answer = 1;
//   if(counter > input) {
//     return answer;
//   }
//   answer = answer * counter;
//   counter++;
//   findRecursiveFactorial(counter);
// }
// findRecursiveFactorial(5);

// O(n)
function findRecursiveFactorial(input) {
  if (input === 2) {
    return 2;
  }
  return input * findRecursiveFactorial(input - 1);
}

// O(n)
function findIterativeFactorial(input) {
  let answer = 1;
  if(input === 2) {
    answer = 2;
  }
  for(let i = 2; i <= input; i++) {
    answer = answer * i;
  }
  return answer;
}

findIterativeFactorial(5);
findRecursiveFactorial(5);

// O(n)
function fibonnaciIterative(n){
  let arr = [0, 1];
  for(let i = 2; i < n + 1; i++) {
    arr.push(arr[i-2] + arr[i-1]);
  }
  return arr[n];
}

// O(2^n) Exponential
// More readable, but VERY slow and time consuming
function fibonnaciRecursive(n){
  if(n < 2) {
    return n;
  }
  return fibonnaciRecursive(n-1) + fibonnaciRecursive(n-2);
}
fibonnaciIterative(7);
fibonnaciRecursive(19);