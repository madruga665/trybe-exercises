const funcaoComPromise = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    if ((typeof a !== "number") | (typeof b !== "number") | (typeof c !== "number")) {
      reject(Error("Informe apenas números"));
    }
    const result = (a + b) * c;

    if (result < 50) {
      return reject(Error("Valor muito baixo"));
    }
    resolve(result);
  });
  return promise;
};

// funcaoComPromise(5, 5, 5)
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error.message));

const randomNumbers = () => {
  return Math.floor(Math.random() * 100 + 1);
};

// GABARITO

// function callDoMath() {
// Criamos um novo array de 3 posições
// e utilizamos o `map` para gerar um número aleatório
// para cada posição do Array
//   const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
// }

// MEU JEITO BURRO DE FAZER AS COISAS

const a = randomNumbers();
const b = randomNumbers();
const c = randomNumbers();

funcaoComPromise(a, b, c)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error.message));
