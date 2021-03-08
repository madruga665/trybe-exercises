let n = 5;
let line = "";
let asterisk = "*";
let middle = (n + 1) / 2;
let left = middle;
let right = middle;

for (let index = 0; index <= middle; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 > left && index2 < right) {
      line += asterisk;
    } else {
      line += ' ';
    }
  }
  console.log(line);
  line = "";
  right += 1;
  left -= 1;
}
