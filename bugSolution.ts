function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1: number = 8
let result2 = subtract(10, 5); // result2: number = 5

// Explicit type checking with a union type for a more robust solution
function addSafe(a: number, b: number | string): number | string {
  if (typeof b === 'string') {
    return a.toString() + b; // String concatenation 
  } else {
    return a + b; // Numeric addition
  }
}

let result3 = addSafe(5, '3'); // result3: string = "53"
let result4 = addSafe(5, 3); // result4: number = 8