const { getUserName } = require("./getUserName");

test("testa quando o usuário é encontrado", () => {
  expect.assertions(1);
  getUserName(4).then((data) => expect(data).toEqual("Mark"));
});

test("testa quando um usuário não é encontrado", () => {
  expect.assertions(1);
  getUserName(10).catch((error) =>
    expect(error).toEqual({ error: "User with 10 not found." })
  );
});

test("testa quando o usuário é encontrado com async", async () => {
  expect.assertions(1);
  const data = await getUserName(4);
  expect(data).toEqual("Mark");
});

test("testa quando um usuário não é encontrado com async", async () => {
  expect.assertions(1);
  try {
    await getUserName(10);
  } catch (error) {
    expect(error).toEqual({ error: "User with 10 not found." });
  }
});
