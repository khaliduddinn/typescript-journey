const input1 = process.argv[2];
const input2 = process.argv[3];
const operation = process.argv[4];


if (!input1 || !input2 || !operation) {
  console.log("Usage: npx ts-node index.ts <num1> <num2> <operation>");
  console.log("Operations: add | subtract | multiply | divide");
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

if (operation === "add") {
  console.log("Result:", add(num1, num2));
} else if (operation === "subtract") {
  console.log("Result:", subtract(num1, num2));
} else if (operation === "multiply") {
  console.log("Result:", multiply(num1, num2));
} else if (operation === "divide") {
  console.log("Result:", divide(num1, num2).toFixed(2));
} else {
  console.log("Invalid operation. Use: add | subtract | multiply | divide");
  process.exit(1);
}