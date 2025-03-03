//Exercise 1: Write a function that takes an array and returns the elements of the array as a string separated by a given joiner. The default joiner should be ','.
function joinElementsInArray(arr, joiner){
    return arr.join(joiner);
}

function printOutString(){
    const code = Document.getElementByClassName("result");
} 

//Exercise 2: Write a function that takes an array and returns a new array with all elements doubled.
function doubleArrayValues(arr){
    return arr.map(element => element * 2);
}


//Exercise 3: Write a function that takes an array and returns the sum of all elements in the array.
function sumElementsInArray(arr){
    return arr.reduce((sum, element) => sum + element, 0);
}

//Exercise 4: Write a function that takes two arrays and returns a new array with all duplicate elements from both arrays.
function getDuplicateValues(arr1, arr2){
    const duplicates = arr1.filter(element => arr2.includes(element));
    return duplicates.join(', ');
}

//Exercise 5:
function removeElementFromArray(arr, element){
    return arr.splice(arr.indexOf(element), 1);
}

function addElementToEndOfArray(arr, element){
    return arr.push(element);
}

function getIndexOfElementInArray(arr, element){
    return arr.indexOf(element);
}

function moveElementToEndOfArray(arr, element){
    const index = arr.indexOf(element);
    arr.splice(index, 1);
    arr.push(element);
    return arr;
}

function iterateOverArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        break;
    }
}

//Exercise 6: Write a function that performs a bubble sort on an array of numbers.
function buubleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
}
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
console.log(removeElementFromArray(people, "Dani"));
console.log(removeElementFromArray(people, "Juan"));
console.log(moveElementToEndOfArray(people, "Luis"));                                   
console.log(addElementToEndOfArray(people, "Jael"));
iterateOverArray(people);
console.log(getIndexOfElementInArray(people, "Maria"));
console.log(people);