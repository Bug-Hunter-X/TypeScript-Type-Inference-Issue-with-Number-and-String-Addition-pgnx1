function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1: number = 8
let result2 = subtract(10, 5); // result2: number = 5

// This will throw an error because TypeScript is unable to infer the type of result3.
let result3 = add(5, '3');