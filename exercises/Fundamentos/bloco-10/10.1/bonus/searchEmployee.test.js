const searchEmployee = require("./searchEmployee");

describe("Testa a função searchEmployee", () => {
  test("Testa se a função searchEmployee é definida", () => {
    expect(searchEmployee).toBeDefined();
  });
  test("Testa se searchEmployee é uma função", () => {
    expect(typeof searchEmployee).toBe("function");
  });
  test("Testa se a função retorna o primerio nome do funcionário pesquisado", () => {
    expect(searchEmployee("8579-6", "firstName")).toBe("Ana");
  });
  test("Testa se a função retorna o sobrenome do funcionário pesquisado", () => {
    expect(searchEmployee("8579-6", "lastName")).toBe("Gates");
  });
  test("Testa se a função retorna uma lista com as especialidades do funcionário", () => {
    expect(searchEmployee("8579-6", "specialities")).toContain("UX", "Design");
  });
  test("Testa se a função lança algum tipo de erro", () => {
    expect(() => {
      searchEmployee("5050-1", "firstName");
    }).toThrow();
  });
  test("Testa a mensagem do erro para ID inexistente", () => {
    expect(() => {
      searchEmployee("5050-1", "specialities");
    }).toThrowError(new Error("ID não identificada"));
  });
  test("Testa a mensagem do erro para informação inexistente", () => {
    expect(() => {
      searchEmployee("8579-6", "Xablau");
    }).toThrowError(new Error("Informação indisponível"));
  });
  
});
