let distance = 5;
let time = 10;
let speed = [distance, time];
let answer = speed.reduce((a,b) => a / b);
console.log(answer)