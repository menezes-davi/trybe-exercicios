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

/*Exercicio 6

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
} */

  /*Exercício 7

  let nota = 75;

  if(nota < 0 || nota > 100){
      console.log("Erro, nota inválida!")
  }
  else if(nota >= 90){
      console.log("A")
  }
  else if(nota >= 80){
    console.log("B")    
  }
  else if(nota >= 70){
    console.log("C")
  }
  else if(nota >= 60){
    console.log("D")
  }
  else if(nota >= 50){
    console.log("E")
  }
  else if(nota < 50){
    console.log("F")
  } */

  /*Exercício 8


  let a = 2; 
  let b = 9;
  let c = 5;

  let par = false

  if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
      par = true;
  }
  console.log(par); */

  /*Exercício 9

  let a = 2;
  let b = 5;
  let c = 6;

  let impar = false;

  if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0 ){
      impar = true;
  }
console.log(impar);  */

/*Exercício 10

const custoProduto = 7;
const valorDeVenda = 20;

if(custoProduto >=0 && valorDeVenda >=0){
    const custoTotal = custoProduto * 1.2;
    const lucro = (valorDeVenda - custoTotal) * 1000;
    console.log(lucro);
}
else{
    console.log("Erro, os valores não podem ser negativos!");
};   */

/*Exercício 11

let aliquotaINSS; 
let aliquotaIR;

const salarioBruto = 7000;

if(salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
}
else if(salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
}
else if(salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
}
else{
    aliquotaINSS = 570.88;
}

const salarioBase = salarioBruto - aliquotaINSS;

if(salarioBase <= 1903.98){
    aliquotaIR = 0;
}
else if(salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80;
}
else if(salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80;
}
else if(salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.225) - 636.13;
}
else{
    aliquotaIR = (salarioBase * 0.275) - 869.36;
};
console.log("Salário: " + (salarioBase - aliquotaIR));  */