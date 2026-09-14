function printUserId(userId: string | number): void {
  if (typeof userId === "string") {
    console.log("Text ID:", userId.toUpperCase());
  } else {
    console.log("Number ID:", userId * 2);
  }
}

printUserId("KHALID123");
printUserId(12345);

function showSetting(value: string | boolean): void {
  if (typeof value === "boolean") {
    console.log("Setting is:", value);
  } else {
    console.log("Setting name:", value.toUpperCase());
  }
}

showSetting(true);
showSetting("dark mode");

function checkInput(input: string | number): void {
    if (typeof input === "string") {
        console.log("Text input:", input.toUpperCase());
    } else {
        console.log("number input:", input * 5);
    }
}

checkInput("hello");
checkInput(4);

type ContactStatus = "active" | "inactive" | "blocked";

function showDetailedStatus(status: ContactStatus): void {
  if (status === "active") {
    console.log("Ready to call");
  } else if (status === "inactive") {
    console.log("Contact is inactive");
  } else {
    console.log("Contact is blocked");
  }
}

showDetailedStatus("active");
showDetailedStatus("inactive");
showDetailedStatus("blocked");

type Lead = {
  name: string;
  company: string;
};

type Customer = {
  name: string;
  plan: "free" | "pro";
};

function showPerson(person: Lead | Customer): void {
  if ("company" in person) {
    console.log("Lead company:", person.company);
  } else {
    console.log("Customer plan:", person.plan);
  }
}

showPerson({
  name: "Khalid",
  company: "Koala"
});

showPerson({
  name: "Sara",
  plan: "pro"
});

type LeadRecord = {
  kind: "lead";
  name: string;
  company: string;
};

type CustomerRecord = {
  kind: "customer";
  name: string;
  plan: "free" | "pro";
};

function displayRecord(record: LeadRecord | CustomerRecord): void {
  if (record.kind === "lead") {
    console.log("Lead company:", record.company);
  } else {
    console.log("Customer plan:", record.plan);
  }
}

displayRecord({
  kind: "lead",
  name: "Khalid",
  company: "Koala"
});

displayRecord({
  kind: "customer",
  name: "Sara",
  plan: "pro"
});

