/* Exercício 1

function isPalindrome(string) {
    for(i in string){
        if(string[i] != string[(string.length - 1) - i]){
            return false;
        }
        else{
            return true;
        }
    }
}
console.log(isPalindrome('davi')) */

/* Exercício 2

function retornaMaiorIndice(array){
    let maiorIndice = 0;
    for(i in array){
        if(array[maiorIndice] < array[i]){
            maiorIndice = i;
        }
    } 
    return maiorIndice;
}

console.log(retornaMaiorIndice([2,4,10,20,5,6,7,30]))  */

/* Exercício 3 

function retornaMenorIndice(array){
    let menorIndice = 0;
    for(i in array){
        if(array[menorIndice] > array[i]){
            menorIndice = i;
        }
    } 
    return menorIndice;
}

console.log(retornaMenorIndice([2,4,10,20,5,6,7,30]))  */

/* Exercício 4

function retornaMaiorNome(array){
    let maiorNome = array[0];
    for(i in array){
        if(maiorNome.length < array[i].length){
            maiorNome = array[i];
        }
    } 
    return maiorNome;
}

console.log(retornaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

*/

/* Exercício 5

function maisRepetido(numeros) {
    let num = {};
  
    for (let index = 0; index < numeros.length; index += 1) {
      let valor = numeros[index];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
    }
  
    let contRepetido = 0;
    let contNumero = 0;
  
    for (let prop in num) {
      if (contRepetido < num[prop]) {
        contRepetido = num[prop];
        contNumero = prop;
      }
    }
  
    return contNumero;
  }
  
  console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]))
  */


