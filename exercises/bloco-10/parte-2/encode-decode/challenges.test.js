const { expect, test } = require("@jest/globals");
const { encode, decode } = require("./challenges.js");

describe("encode", () => {
  test("Testa se encode é uma função", () => {
    expect(typeof encode).toBe("function");
  });
  test("testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5,", () => {
    expect(encode("a, e, i, o, u")).toBe("1, 2, 3, 4, 5");
  });
  test("checa se o retorno da função tem o mesmo número de caracteres", () => {
    expect(encode("trybe").length).toBe(5);
  });
  test("Testa se as demais letras não são convertidas", () => {
    expect(encode("Luciano")).toBe("L5c31n4");
  });
});

describe("decode", () => {
  test("Testa se encode é uma função", () => {
    expect(typeof encode).toBe("function");
  });
  test("testa se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u", () => {
    expect(decode("1, 2, 3, 4, 5")).toBe("a, e, i, o, u");
  });
  it("checa se o retorno da função tem o mesmo número de caracteres", () => {
    expect(decode("trybe").length).toBe(5);
  });
  test("Testa se as demais letras não são convertidas", () => {
    expect(decode("L5c31n4")).toBe("Luciano");
  });
});
