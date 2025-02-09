//Exercise 2: Write a function that takes an array and returns a new array with all elements doubled.

function doubleArrayValues(arr){
    return arr.map(element => element * 2);
}

const arrExample = [1, 2, 4, 5];
console.log(doubleArrayValues(arrExample));
