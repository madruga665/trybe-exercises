const myFunction = (fullName) => {
  const email = fullName.toLowerCase().split(" ").join("_");
  const person = {
    name: fullName,
    email: `${email}@trybe.com`,
  };
  return person;
};

console.log(myFunction("Luciano Amancio"));

const newEmployees = (myFunction) => {
  const employees = {
    id1: myFunction("Pedro Guerra"),
    id2: myFunction("Luiza Drumond"),
    id3: myFunction("Carla Paiva"),
  };
  return employees;
};

console.log(newEmployees(myFunction));
