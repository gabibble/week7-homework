let hello = "hello!";
//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string =
  "I'm going to the Indy 500 later today, but first, I'd like to do a Dot-to-dot puzzle and pick a Daisy.";
let dog_names = [
  "Butch",
  "Daisy",
  "Franny",
  "Indy",
  "Eyo",
  "Athena",
  "Dot",
  "Billy",
];

string_dogs = dog_names.filter((i) => dog_string.includes(dog_names[i]));
console.log(string_dogs);

function findWords(arr, str) {
  matches = [];
  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      console.log(`${arr[i]}: matched dog name!`);
      matches.push(arr[i]);
    } else {
      console.log("no Match");
    }
  }
  return "Matched Names: " + matches.join(", ");
}

console.log(findWords(dog_names, dog_string));

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let names = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arr.splice(i, 1, "Even Index");
    }
  }
  return arr;
}

console.log(replaceEvens(names));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

document.write(
  `<h1>Week 7 Homework</h1> 
  <h3>Day 1</h3> 
  <h5>Question 1:</h5>
  <p>Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"</p>
Names: ${dog_names.join(", ")}<br>String: ${dog_string}<br>${findWords(
    dog_names,
    dog_string
  )}
    <h5>Question 2:</h5>
  <p>Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index"</p>${replaceEvens(names).join(
    ", "
  )}`
);
