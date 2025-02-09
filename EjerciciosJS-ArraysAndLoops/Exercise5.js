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

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
console.log(removeElementFromArray(people, "Dani"));
console.log(removeElementFromArray(people, "Juan"));
console.log(moveElementToEndOfArray(people, "Luis"));                                   
console.log(addElementToEndOfArray(people, "Jael"));
iterateOverArray(people);
console.log(getIndexOfElementInArray(people, "Maria"));
console.log(people);
