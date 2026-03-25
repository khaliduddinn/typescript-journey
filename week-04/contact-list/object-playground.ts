type Contact = {
  name: string;
  email: string;
  age: number;
  isActive: boolean;
  phone?: string;
};

// -----------------------------
// Data
// -----------------------------

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

// -----------------------------
// Functions
// -----------------------------

function addContact(contact: Contact): void {
  contacts.push(contact);
}

function listContacts(): void {
  console.log("All Contacts:");

  contacts.forEach((contact, index) => {
    console.log(
      `${index + 1}. ${contact.name} - ${contact.email} - ${contact.isActive ? "Active" : "Inactive"}`
    );
  });
}

function searchContacts(query: string): Contact[] {
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(query.toLowerCase());
  });
}

function toggleActive(email: string): void {
  const contact = contacts.find((contact) => {
    return contact.email === email;
  });

  if (contact) {
    console.log(contact.name + " was " + (contact.isActive ? "active" : "inactive"));
    contact.isActive = !contact.isActive;
    console.log(contact.name + " is now " + (contact.isActive ? "active" : "inactive"));
  } else {
    console.log("Contact not found");
  }
}

function countOlderThan(age: number): number {
  return contacts.filter((contact) => {
    return contact.age > age;
  }).length;
}

function getInactiveContacts(): Contact[] {
  return contacts.filter((contact) => {
    return contact.isActive === false;
  });
}

function getEmails(): string[] {
  return contacts.map((contact) => {
    return contact.email;
  });
}

function countActiveContacts(): number {
  return contacts.reduce((count, contact) => {
    if (contact.isActive) {
      return count + 1;
    }
    return count;
  }, 0);
}

// -----------------------------
// Test Calls
// -----------------------------

addContact({
  name: "Sara",
  email: "sara@email.com",
  age: 27,
  isActive: true
});

console.log("Updated Contacts:");
listContacts();

console.log("Older than 26 Count:", countOlderThan(26));
console.log("Inactive Contacts:", getInactiveContacts());
console.log("Emails:", getEmails());
console.log("Active Count:", countActiveContacts());

const results = searchContacts("sa");
console.log('Search results for "sa":', results);

toggleActive("menaka@email.com");

console.log("After toggle:");
listContacts();