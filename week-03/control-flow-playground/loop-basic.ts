// loop-basic.ts

// 1) Countdown (basic while)
let count: number = 5;

while (count > 0) {
  console.log("Countdown:", count);
  count = count - 1;
}
console.log("Blast off!");

// 2) Add numbers until we reach a target
let total: number = 0;
let add: number = 1;

while (total < 10) {
  total = total + add;
  console.log("Total is now:", total);
  add = add + 1;
}

// 3) Guard against infinite loop (same idea, different condition)
let steps: number = 0;

while (steps < 3) {
  console.log("Step:", steps);
  steps = steps + 1;
}

// 4) Pattern: loop until a condition becomes true
// Imagine this is "keep guessing until correct"
let guess: number = 0;
const secret: number = 3;

while (guess !== secret) {
  guess = guess + 1; // pretend the user guessed 1, then 2, then 3...
  console.log("Guess:", guess);
}
console.log("Correct! Secret was", secret);