/* const newEmployees = (name) => {
    const employees = {
      id1: name('Pedro Guerra'),
      id2: name('Luiza Drumond'),
      id3: name('Carla Paiva'),
    }
    return employees;
  };

  const createEmail = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return { fullName, email: `${email}@trybe.com` };
};

console.log(newEmployees(createEmail));
   */
/* const sortitionResult = (number, func) => {
    const sortitionNumber = Math.floor((Math.random() * 5) + 1);
    return func(number, sortitionNumber) ? 'Tente novamente' : 'Parabéns você ganhou';
};

const check = (number, sortitionNumber) => number === sortitionNumber;

console.log(sortitionResult(2, check)); */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswer = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
        return 1;
    } if (studentAnswer === 'N.A') {
        return 0;
    } 
    return -0.5;
};

const returnPoints = (gabarito, respostas, func) => {
    let count = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        const analisa = func(gabarito[index], respostas[index]);
        count += analisa;
    }
    return `Total de pontos: ${count}`;
}
console.log(returnPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswer));