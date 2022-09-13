//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
console.log("\nProblem 1 \n");
console.log("\n");
let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

function favFoods(obj) {
  let vals = Object.values(person3);
  let type = Object.keys(person3);

  for (let i in vals) {
    if (Array.isArray(vals[i])) {
      for (let j in vals[i]) {
        if (typeof vals[i][j] === "string") {
          console.log(
            `${type[i].toUpperCase()} ${parseInt(j) + 1}: ${vals[i][j]}`
          );
        } else {
          let shakes = Object.values(vals[i][j]);
          let shacks = Object.keys(vals[i][j]);
          for (let k in shakes) {
            console.log(
              `${type[i].toUpperCase()} ${parseInt(k) + 1}: ${shakes[k]} from ${
                shacks[k]
              }`
            );
          }
        }
      }
    } else {
      console.log(`${type[i].toUpperCase()}: ${vals[i]}`);
    }
  }
}

favFoods(person3);
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

console.log("\nProblem 2 \n");
console.log("\n");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  addYear = (x) => {
    this.age = this.age + x;
    return `🎉 Happy birthday, ${this.name}! You're ${this.age} now!! `;
  };

  printInfo = () =>
    `Name: ${this.name} \nAge: ${this.age} \nStatus: ${this.checkStatus(
      this.age
    )}`;

  checkStatus = (x) => (x > 17 ? "Voter! 🗳" : "Too young to vote 😔");
}
let peg = new Person("Peg", 32);
console.log(peg.printInfo());

let youngster = new Person("Bob", 15);
console.log(youngster.printInfo());
console.log(youngster.addYear(1));
console.log(youngster.addYear(1));
console.log(youngster.addYear(1));
console.log(youngster.printInfo());

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
console.log("\nProblem 3 \n");
console.log("\n");
function checkLength(word) {
  return new Promise((resolve, reject) => {
    if (word.length < 10) {
      resolve(word);
    } else {
      reject(word);
    }
  });
}

checkLength("Hello")
  .then((result) => {
    console.log("'" + result + "' is an accebtable length.");
  })
  .catch((error) => {
    console.log("'" + error + "' is too long. Please try again.");
  });

checkLength("Python")
  .then((result) => {
    console.log("'" + result + "' is an accebtable length.");
  })
  .catch((error) => {
    console.log("'" + error + "' is too long. Please try again.");
  });

checkLength("Incomprehensibility")
  .then((result) => {
    console.log("'" + result + "' is an accebtable length.");
  })
  .catch((error) => {
    console.log("'" + error + "' is too long. Please try again.");
  });
