function solveQuadratic(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta > 0) {
      let X1 = (-b + Math.sqrt(delta)) / (2 * a);
      let X2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `${X1}, ${X2}`;  // Corrected string interpolation
    } else if (delta === 0) {
      let root = -b / (2 * a);
      return `The root is real and equal: ${root}`;
    } else {
      let realPart = -b / (2 * a);
      let imaginaryPart = Math.sqrt(-delta) / (2 * a);  // Corrected variable name
      return `The roots are not possible`;
    }
}

let a = -8, b = 3, c = -2;
console.log(solveQuadratic(a, b, c));
