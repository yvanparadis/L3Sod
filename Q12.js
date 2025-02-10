let abel = 5;
let pattern = '';
for (let i = 1; i <= abel; i++) {
  for (let j = 0; j < i; j++) {
    pattern += '*';
  }
  pattern += '\n';
}
console.log(pattern);
