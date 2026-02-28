const input1 = process.argv[2];
const input2 = process.argv[3];

if (!input1 || !input2) {
  console.log('Usage: npx ts-node index.ts <num1> <num2>');
  process.exit(1);
}

const num1 = Number(input1);
const num2 = Number(input2);

if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log("Both inputs must be valid numbers.");
  process.exit(1);
}

function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number {
  if (b === 0) {
    console.log("Cannot divide by zero");
    return 0;
  }
  return a / b;
}

console.log("Addition:", add(num1, num2));
console.log("Subtraction:", subtract(num1, num2));
console.log("Multiplication:", multiply(num1, num2));
console.log("Division:", divide(num1, num2).toFixed(2));;