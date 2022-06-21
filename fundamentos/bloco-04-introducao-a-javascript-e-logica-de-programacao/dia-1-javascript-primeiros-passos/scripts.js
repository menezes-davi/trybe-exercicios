/*Exercício 1

const a = 10;
const b = 7;
 
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);*/

/*Exercício 2

const a = 10;
const b = 7;

 if(a>b){
     console.log(a);
 }
 else{
     console.log(b);
 } */

 /*Exercício 3

 const a = 10;
 const b = 8;
 const c = 5;

 if(a > b && a > c){
    console.log(a);
 }
 else if (b > a && b > c){
     console.log(b);
 }
 else{
     console.log(c);
 } */

 /*Exercício 4

 const number = '-5';

 if(number > 0){
     console.log("positive");
 }
 else if(number < 0){
     console.log("negative");
 }
 else{
     console.log('zero');
 } */

 /*Exercício 5

 const anguloA = 110;
 const anguloB = 60;
 const anguloC = 10;

 let somaDosAngulos = anguloA + anguloB + anguloC;
 
 let angulosSaoPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

 if(angulosSaoPositivos){
     if(somaDosAngulos === 180){
         console.log(true);
     }
     else{
         console.log(false);
     }
 }
    else{
        console.log("Erro: Ângulos do triângulo não são positivos!");
    }
    */

//Exercicio 6

const peçaXadrez = "DAMA";

switch (peçaXadrez.toLowerCase()) {
    case "rei":
        console.log("Rei: Anda uma casa em qualquer direção.");
        break;
    case "dama":
        console.log("Dama: Anda na horizontal, vertical ou diagonal.");
        break;
    case "bispo":
        console.log("Bispo: Anda na diagonal da sua cor.");
        break;
    case "cavalo":
        console.log("Cavalo: Anda em formato de 'L', pode saltar outras peças.");
        break;
    case "torre":
        console.log("Torre: Anda na vertical ou horizontal.");
        break;
    case "peão":
        console.log("Peão: Uma casa para frente, pode andar duas se for o primeiro movimento,");
        break;
    default:
        console.log("Erro,essa peça não exite!")
        break;
}