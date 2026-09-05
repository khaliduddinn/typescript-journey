type Status = "active" | "inactive" | "blocked";

interface Contact  {
  name: string;
  email: string;
  age: number;
  status: Status;
  phone?: string;
};

const khalid: Contact = {
  name: "Khalid",
  email: "khalid@email.com",
  age: 29,
  status: "active"
};

const sara: Contact = {
  name: "Sara",
  email: "sara@email.com",
  age: 27,
  status: "inactive"
};

const menaka: Contact = {
  name: "Menaka",
  email: "menaka@email.com",
  age: 31,
  status: "blocked"
};

console.log(khalid);
console.log(sara);
console.log(menaka);