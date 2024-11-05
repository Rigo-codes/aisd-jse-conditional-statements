// Logical Operators

age = 18;
minDrivingAge = '18';
let hasLicense = false;

// Using && (AND) operator to check if both conditions are true
if (age == minDrivingAge && hasLicense) {
    console.log("You can drive."); // Expected output: (This will not print because hasLicense is false)
} else {
    console.log("You cannot drive."); // Expected output: "You cannot drive."
}

// Using || (OR) operator to check if at least one condition is true
if (age >= 18 || hasLicense) {
    console.log("You meet one of the requirements to drive."); // Expected output: "You meet one of the requirements to drive."
} else {
    console.log("You do not meet the requirements to drive."); // Expected output: (This will not print because age >= 18 is true)
}

// Using ! (NOT) operator to invert a condition
let isWeekend = false;
if (!isWeekend) {
    console.log("It's a weekday."); // Expected output: "It's a weekday."
}
