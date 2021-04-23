const { test } = require("@jest/globals");
const sum = require("./sum");

describe("sum", () => {
  test("testa se o retorno da soma 4 + 5 é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("testa se o retorno da soma 0 + 0 é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("testa se a função lança um erro se recebe um string como parametro", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  test('Testa se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => {
      sum(4, "5");
    }).toThrow("parameters must be numbers");
  })
});
