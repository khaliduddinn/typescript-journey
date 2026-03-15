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

// --- Functions ---

function addContact(contact: Contact): void {
  contacts.push(contact);
}

function searchContacts(query: string): Contact[] {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });
}

function listContacts(): void {
  console.log("All Contacts:");
  console.log(contacts);
}

function toggleActive(email: string): void {
  const contact = contacts.find((contact) => {
    return contact.email === email;
  });

  if (contact) {
    contact.isActive = !contact.isActive;
    console.log(contact.name + " is now" + (contact.isActive ? "active" : "inactive"));
  } else {
    console.log("Contact not found");

  }
}

// --- Add a new contact (test) ---

addContact({
  name: "Sara",
  email: "sara@email.com",
  age: 27,
  isActive: true
});

console.log("Updated Contacts:", contacts);

// --- Array method practice (now includes Sara) ---

// Count contacts older than 26
const olderThan26Count = contacts.filter((contact) => {
  return contact.age > 26;
}).length;
console.log("Older than 26 Count:", olderThan26Count);

// Inactive contacts
const inactiveContacts = contacts.filter((contact) => {
  return contact.isActive === false;
});
console.log("Inactive Contacts:", inactiveContacts);

// Emails
const emails = contacts.map((contact) => {
  return contact.email;
});
console.log("Emails:", emails);

// Active count (reduce)
const activeCount = contacts.reduce((count, contact) => {
  if (contact.isActive) {
    return count + 1;
  }
  return count;
}, 0);
console.log("Active Count:", activeCount);

// Search (case-insensitive)
const query = "sa"; // try: "kha", "men", "YO", "x"
const results = searchContacts(query);
console.log(`Search results for "${query}":`, results);

listContacts();

toggleActive("menaka@email.com");

console.log("After toggle:");
listContacts();