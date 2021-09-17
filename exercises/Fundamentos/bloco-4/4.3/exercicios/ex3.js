let n = 5;
let line = "";
let asterisk = "*";
let position = n;

for (let index = 0; index <= n; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 < position) {
      line += " ";
    } else {
      line += asterisk;
    }
  }
  console.log(line);
  line = "";
  position = position - 1;
}
