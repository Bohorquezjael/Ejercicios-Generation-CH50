function moreLargeStrings(word, words){
    let wordsMoreLarges = [];
    for (const element of words) {
        if(element.length > word.length){
            wordsMoreLarges.push(element);
        }
    }
    return wordsMoreLarges;
}

function printArrayInHtml(words){
    const elementList = document.getElementById("list");
    for (const word of words) {
        const node = document.createElement("li");
        node.innerText = word;
        elementList.appendChild(node);
    }
}

const words = ['insecto', 'bootcamp', 'escritorio', 'automovil', 'avion', 'perro', 'taladro', 'camisa', 'celular', 'comida'];
const result = moreLargeStrings("uno", words);
console.log(result);
printArrayInHtml(result);