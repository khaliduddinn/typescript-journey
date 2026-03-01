// guessing-game.ts
const promptSync = require("prompt-sync");
const ask = promptSync();

const MIN: number = 1;
const MAX: number = 10;

const secret: number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let attempts: number = 0;
let guess: number | null = null;

console.log("🎯 Number Guessing Game");
console.log(`I'm thinking of a number between ${MIN} and ${MAX}.`);

while (guess !== secret) {
  const input: string = ask("Enter your guess: ");
  const parsed: number = Number(input);

  // validation
  if (Number.isNaN(parsed)) {
    console.log("❌ That's not a number. Try again.");
    continue;
  }

  if (parsed < MIN || parsed > MAX) {
    console.log(`❌ Out of range. Please guess between ${MIN} and ${MAX}.`);
    continue;
  }

  guess = parsed;
  attempts = attempts + 1;

  if (guess < secret) {
    console.log("📈 Too low!");
  } else if (guess > secret) {
    console.log("📉 Too high!");
  } else {
    console.log(`✅ Correct! You got it in ${attempts} attempts.`);
  }
}