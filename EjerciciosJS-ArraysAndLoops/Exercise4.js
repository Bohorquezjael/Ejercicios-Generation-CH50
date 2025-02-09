//Exercise 4: Write a function that takes two arrays and returns a new array with all duplicate elements from both arrays.

function getDuplicateValues(arr1, arr2){
    const duplicates = arr1.filter(element => arr2.includes(element));
    return duplicates.join(', ');
}

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
console.log(getDuplicateValues(arr1, arr2)); 
