//Exercise 1: Write a function that takes an array and returns the elements of the array as a string separated by a given joiner. The default joiner should be ','.

function joinElementsInArray(arr, joiner){
    return arr.join(joiner);
}

const arr = ["This", "is", "a", "sentence."];
console.log(joinElementsInArray(arr, " "));
