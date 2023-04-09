// FUNCTIONS: types of syntax
// BEFORE YOU START: please read the /exercises-info/e4.md file.
// THE TASK FOR THIS EXERCISE is to refactor ALL (4) functions beneath to use the arrow function syntax.

/** =========================
 * The splitFirstAndLastNames() function takes an argument of type string.
 * The string contains the first and the last name separated by a space.
 * The function returns an array of first and last names as array items
 * splitFirstAndLastNames('John Smith') => ['John', 'Smith']
 */

function splitFirstAndLastNames(str) {
  return str.split(' ');
}


/** =========================
 * The personAge() constant is assigned to a function, that takes an object of person Data as the argument.
 * The function returns the value of the age property of the argument object
 * personAge({ id: 1, name: 'Someone', age: 32}) => 32
 */

const personAge = function(personObject) {
  return personObject.age;
}


/** =========================
 * The isNameInArray function takes an array and string of name as the arguments.
 * The function returns the boolean (true/false) if the name exists in the given array
 * isNameInArray(['Jon', 'Michael', 'Andrey'], 'Michael') => true;
 * isNameInArray(['Jon', 'Michael', 'Andrey'], 'James') => false;
 */

const isNameInArray = function(arr, name) {
  return arr.includes(name);
}


/** =========================
 * The logTimer function takes a number as the arguments.
 * The function keeps logging the incremented value every second
 * Make sure you refactor ALL functions in the current example
 * !!! Hint: There are two functions to refactor !!!
 */

const logSecondsUpToMax = function(max) {
  let i = 0;
  const timer = setInterval(function() {
    if (i < max) {
      console.log(++i);
    } else {
      clearInterval(timer);
    }
  }, 1000);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


// Do not delete or change the lines beneath
const f = {
  splitFirstAndLastNames: splitFirstAndLastNames || undefined,
  personAge: personAge || undefined,
  isNameInArray: isNameInArray || undefined,
  logSecondsUpToMax: logSecondsUpToMax || undefined,
}
export { f }
