// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
	const result = num + 2;
  return result;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
	const result = word + 's';
  return result;
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	let empty = [];
  for (let i=0; i < array.length; i++) {
    empty.push(addTwo(array[i]));
  }
  return empty;
}


// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(multiplyBy5(array[i]));
  }
  return output;
  
}

function multiplyBy5 (num) {
  return num * 5;
}

let randomNumbers = [1, 5, 10, 15];

let answer = forEach(randomNumbers, multiplyBy5);
console.log(answer);
// see for yourself if your forEach works!
