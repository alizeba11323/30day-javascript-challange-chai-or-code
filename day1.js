//Activity1: Variable Declaration

var assignNumber = 12;
console.log(assignNumber);
let assignString = "Hello World!!!";
console.log(assignString);

//Activity2: Constant Declartion

const assignConstantValue = true;
console.log(assignConstantValue);

// Activity3: DataTypes

let name = "Rahul";
let age = 20;
let isProgrammer = false;
const hobbies = ["reading", "watching movies", "singing"];
const projectDescription = {
  projectName: "Project Name",
  duration: "5d",
  technology: ["react", "node", "mongodb", "express"],
  projectIdea: "Real Time ChatApp",
};

console.log(typeof name);
console.log(typeof age);
console.log(typeof isProgrammer);
console.log(typeof hobbies);
console.log(typeof projectDescription);

// Activity4: Reassigning Variables

let a = 10;
console.log(a);
a = 20;
console.log(a);

// Activity5: Understand Const

const b = 10;
// b = 20;
console.log(b);
//TypeError: Assignment to constant variable.
