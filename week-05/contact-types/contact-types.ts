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

interface Task {
  title: string;
  priority: "low" | "medium" | "high";
  isDone: boolean;
  dueDate?: string;
  notes?: string;
}


const codingTask: Task = {
  title: "Practice TypeScript",
  priority: "high",
  isDone: false
};

console.log(codingTask);

const readingTask: Task = {
  title: "Read TypeScript notes",
  priority: "medium",
  isDone: false,
  notes: "Review interfaces and unions"
};

console.log(readingTask);


type CustomerLevel = "basic" | "silver" | "gold";

type Plan = "free" | "pro" | "business";

type VerificationStatus = "verified" | "pending" | "rejected";

interface Customer {
  name: string;
  email: string;
  plan: Plan;
  isVerified: boolean;
  phone?: string;
  level: CustomerLevel;
  verificationStatus: VerificationStatus;
}

const islam: Customer = {
  name: "Islam",
  email: "islam@email.com",
  plan: "pro",
  isVerified: true,
  level: "gold",
  verificationStatus: "verified",
};

console.log(islam);

const contacts: Contact[] = [
    khalid,
    sara,
    menaka
];

console.log(contacts);

const activeContacts = contacts.filter((contact) => {
  return contact.status === "active";
});

console.log("Active Contacts:", activeContacts);

function updateStatus(email: string, newStatus: Status): void {
  const contact = contacts.find((contact) => {
    return contact.email === email;
  });

  if (contact) {
    contact.status = newStatus;
  }
}

updateStatus("sara@email.com", "blocked");

updateStatus("menaka@email.com", "active");

updateStatus("khalid@email.com", "inactive");

console.log(contacts);

const blockedContacts = contacts.filter((contact) => {
  return contact.status === "blocked";
});

console.log("Blocked Contacts:", blockedContacts);

function getBlockedContacts(): Contact[] {
  return contacts.filter((contact) => {
    return contact.status === "blocked";
  });
}

console.log("Blocked Contacts:", getBlockedContacts());

function findContactByEmail(email: string): Contact | undefined {
  return contacts.find((contact) => {
    return contact.email === email;
  });
}

console.log(findContactByEmail("menaka@email.com"));

