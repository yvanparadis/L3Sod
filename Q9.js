function paradise(number) {
    let sum = 0;
    let olgan = String(Math.abs(number));
    for (let i = 0; i < olgan.length; i++) {
      sum += Number(olgan[i]);
    }
    return sum;
  }
  let number = 1237089745;
console.log(paradise(number));
