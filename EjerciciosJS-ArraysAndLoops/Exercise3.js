//Exercise 3: Write a function that takes an array and returns the sum of all elements in the array.

function sumElementsInArray(arr){
    return arr.reduce((sum, element) => sum + element, 0);
}

const arr = [1, 2, 3, 4];
console.log(sumElementsInArray(arr));
