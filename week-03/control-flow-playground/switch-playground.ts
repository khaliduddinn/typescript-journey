const day: string = "Wednesday"; 

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;  

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": 
     console.log ("Weekday!");
     break;

  default:
    console.log("Unknown day");
}