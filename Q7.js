let mass = 5;
let acceleration = 10;
let force = [mass,acceleration];
let answer = force.reduce((a,b) => a * b);
console.log(answer)