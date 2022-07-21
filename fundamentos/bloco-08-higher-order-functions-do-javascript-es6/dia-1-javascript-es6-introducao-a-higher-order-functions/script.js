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
const sortitionResult = (number, func) => {
    const sortitionNumber = Math.floor((Math.random() * 5) + 1);
    return func(number, sortitionNumber) ? 'Tente novamente' : 'Parabéns você ganhou';
};

const check = (number, sortitionNumber) => number === sortitionNumber;

console.log(sortitionResult(2, check));
