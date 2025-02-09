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

const arr = [3, 6, 12, 5, 100, 1];
console.log(arr);
buubleSort(arr);
console.log(arr);
