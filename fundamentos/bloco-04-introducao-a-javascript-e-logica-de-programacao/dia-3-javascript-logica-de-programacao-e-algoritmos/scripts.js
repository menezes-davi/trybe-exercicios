/* Exercício 1

let fatorial = 1;

for(let index = 10; index > 0 ; index -= 1){
   fatorial *= index
}
console.log(fatorial);  */

/* Exercício 2

let word = 'tryber';

let invertedWord = '';

for(let index = 0; index < word.length; index += 1){
    invertedWord += word[word.length - 1 - index];
}
console.log(invertedWord); */

/* Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for(let i = 0; i < array.length; i+=1){
    if(array[i].length > biggestWord.length){
        biggestWord = array[i];
    }
}

for(let i = 0; i < array.length; i+=1){
    if(array[i].length < biggestWord.length){
        smallestWord = array[i];
    }
}

console.log(biggestWord);
console.log(smallestWord); */

/* Exercício 4

let maiorPrimo = 0;

for(let numero = 2; numero <= 50; numero += 1){
    let primo = true;
    for(let divisor = 2; divisor < numero; divisor +=1){
        if(numero % divisor === 0){
            primo = false;
        }
    }
    if(primo){
        maiorPrimo = numero;
    }
}
console.log(maiorPrimo); */