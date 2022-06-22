/* Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}; */

/* Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for(let i = 0; i < numbers.length; i++){
     soma += numbers[i];
}
console.log(soma); */

/* Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let i = 0; i < numbers.length; i++){
     soma += numbers[i];
}
console.log((soma/numbers.length)); */

/* Exercício 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let i = 0; i < numbers.length; i++){
     soma += numbers[i];
};
 soma = soma/numbers.length;

 if(soma > 20){
     console.log("Valor maior que 20!");
 }
 else{
     console.log("Valor menor ou igual a 20!");
 }  */

 /*Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    }
}
console.log(maiorNumero); */

/* Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let count = 0;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !==  0){
       count += 1;
    }
}
if(count === 0){
    console.log("Nenhum valor ímpar encontrado!");
}
else{
    console.log(count);
}   */

/* Exercício 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i];
    }
}
console.log(menorNumero); */

/* Exercício 8 

let array = [ ];

for(let i = 1; i <= 25; i += 1){
    array.push(i);
}
console.log(array); */

// Exercício 9

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let array2 = [];

let divisao = array(i) / 2;

for(let i = 0; i < array.lenght; i++){
    array2.push(divisao);
}
console.log(array2);
