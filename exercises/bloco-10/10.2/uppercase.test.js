const uppercase = require("./uppercase");

test("uppercase", (done) => {
  uppercase("xablau", (str) => {
    expect(str).toBe("XABLAU");
    done();
  });
});
