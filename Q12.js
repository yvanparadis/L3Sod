let rows = 5;
let pattern = '';
for (let i = 1; i <= rows; i++) {
  for (let j = 0; j < i; j++) {
    pattern += '*';
  }
  pattern += '\n';
}
console.log(pattern);
