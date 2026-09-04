let people = [
  { name: "Khalid", age: 29, isActive: true },
  { name: "Sara", age: 27, isActive: true },
  { name: "Menaka", age: 31, isActive: false }
];

let activePeople = people.filter((person) => {
  return person.isActive;
});

let names = people.map((person) => {
  return person.name;
});

let sara = people.find((person) => {
  return person.name === "Sara";
});

let activeCount = people.reduce((count, person) => {
  if (person.isActive) {
    return count + 1;
  }

  return count;
}, 0);

console.log(activePeople);
console.log(names);
console.log(sara);
console.log(activeCount);