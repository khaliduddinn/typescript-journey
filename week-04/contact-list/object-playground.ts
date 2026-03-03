type Contact = {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  phone?: string;
};

const contacts: Contact[] = [
  {
    name: "Khalid",
    email: "khalid@email.com",
    age: 29,
    isActive: true
  },
  {
    name: "Menaka",
    email: "menaka@email.com",
    age: 31,
    isActive: false
  },
  {
    name: "Yousuf",
    email: "yousuf@email.com",
    age: 21,
    isActive: false
  }
];

// Count contacts older than 26
const ageCount = contacts.filter((contact) => {
  return contact.age > 26;
}).length;

console.log("Older than 26 Count:", ageCount);

// 1) inactiveContacts
const inactiveContacts = contacts.filter((contact) => {
  return contact.isActive === false;
});
console.log("Inactive Contacts:", inactiveContacts);

// 2) emails
const emails = contacts.map((contact) => {
  return contact.email;
});
console.log("Emails:", emails);

// 3) activeCount (using reduce)
const activeCount = contacts.reduce((count, contact) => {
  if (contact.isActive) {
    return count + 1;
  }
  return count;
}, 0);
console.log("Active Count:", activeCount);

const query = "x"; // try: "kha", "men", "YO"
const found = contacts.filter((contact) => {
  return contact.name.toLowerCase().includes(query.toLowerCase());
});

console.log(`Search results for "${query}":`, found);