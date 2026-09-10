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