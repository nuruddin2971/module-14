// Task 14-1: Spot the Error Type

// // Bug type: SyntaxError
// function sayHi(name) {
//   return "Hi, " + name;
// }
// const greeting = sayHi("Mira");
// console.log(greeting);

// // Bug type: TypeError
// let word = "hello";
// console.log(word.toUpperCase());

// // Bug type: Logical bug
// function square(num) {
//   return num * num;
// }
// console.log(square(4));

// ------------------------------------------------------------

// Task 14-2: Debug a Broken Conditional

// Bug: find why score = 50 doesn't return "Pass"

// function checkScore(score) {
//   if (score >= 50) {
//     return "Pass";
//   } else {
//     return "Fail";
//   }
// }

// console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
// console.log(checkScore(40)); // Expected: "Fail"

// -----------------------------------------------------------------------------

// Task 14-3: Debug a Broken Loop

// Bug: this loop never ends — find the missing piece

// function countUpTo(n) {
//   let count = 0;

//   for (let i = 1; i <= n; i++) {
//     // something is missing here
//     count = count + 1;
//   }

//   return count;
// }

// console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)

// ----------------------------------------------------------------------------------

// Task 14-4: Debug a Broken Array Problem

// Bug: find why this doesn't return the first element
 
function getFirstElement(arr) {
    // console.log(arr)
  return arr[0]; // find the bug
}
 
console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)
