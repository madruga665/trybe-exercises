let salario = 3000;
let inss = 0;
let ir = 0;
let aliquotaInss = 0;
let aliquotaIr = 0;
let parcelaIr = 0;
let salarioInss = 0;
let salarioLiquido = 0;

// Calculo INSS
if (salario <= 1556.94) {
  aliquotaInss = 8;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  aliquotaInss = 9;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  aliquotaInss = 11;
} else if (salario >= 5189.83) {
  inss = 570.88;
}

inss = (salario / 100) * aliquotaInss;
salarioInss = salario - inss;

//Calculo do IR
if (salarioInss <= 1903.98) {
  ir = 0;
} else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
  aliquotaIr = 7.5;
  parcelaIr = 142.8;
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
  aliquotaIr = 15;
  parcelaIr = 354.8;
} else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
  aliquotaIr = 22.5;
  parcelaIr = 636.13;
} else if (salarioInss >= 4664.68) {
  aliquotaIr = 27.5;
  parcelaIr = 869.36;
}

ir = (salarioInss / 100) * aliquotaIr - parcelaIr;
salarioLiquido = salarioInss - ir;
console.log(salarioLiquido.toFixed(2));
