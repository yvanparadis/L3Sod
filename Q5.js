

let array1 = [1, 2, 3];
let array2 = [4, 1, 5, 6];
let abel = [...new Set([...array1, ...array2])];
console.log(abel);
