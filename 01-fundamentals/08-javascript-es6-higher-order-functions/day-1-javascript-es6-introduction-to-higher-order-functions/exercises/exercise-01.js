const newEmployee = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('');
  const employee = { 
    fullName: fullName, 
    email: `${email}@gmail.com`
  };

  return employee;
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva')
  }

  return employees;
};

console.log(newEmployees(newEmployee));
