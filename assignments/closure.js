// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function hobbies(hobbie) {
  return function(name) {
    switch (hobbie) {
      case "base":
        return `Right on!! Slap the base ${name}`;
        break;

      case "gamer":
        return `Game on ${name}, game on!`;
        break;

      default:
        return `That is an awesome hobbie, ${name}`;
    }
  };
}

let basePlayer = hobbies("base");
console.log(basePlayer("John"));

let gamePlayer = hobbies("gamer");
console.log(gamePlayer("Alex"));

let musicPlayer = hobbies("music");
console.log(musicPlayer("Alfred"));

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
};

const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
