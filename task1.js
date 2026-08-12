// Task-1

// Broken Conditional

function checkAdult(age) {
  if (age >= 18) {
    return "Adult";
  }
  return "Minor";
}

// console.log(checkAdult(18));

// Brainstorming:
// 1) Did I compare or assign the value?
// 2) Why is every result becoming "Adult"?

// -----------------------------------------------------------------

// Task-2

// Broken Conditional

function canApply(age, hasNID) {
  if (age >= 18 && hasNID) {
    return "Eligible";
  }
  return "Not Eligible";
}

// console.log(canApply(35, true));

// Brainstorming:
// 1) Should BOTH conditions be true to apply?
// 2) Are we using the correct logical operator?

// -----------------------------------------------------------------

// Task-3

// Broken Conditional

// Condition:
// - Scholarship: 90% or more attendance AND 80 or more assignment marks.
// - Final Exam: 80% or more attendance AND 50 or more assignment marks.
// - Otherwise, Not Eligible.

function canAttendFinalExam(attendance, assignmentMark) {
  if (attendance >= 90 && assignmentMark >= 80) {
    return "Eligible with Scholarship";
  } else if (attendance >= 80 && assignmentMark >= 50) {
    return "Eligible for Final Exam";
  } else {
    return "Not Eligible";
  }
}
// console.log(canAttendFinalExam(70, 50));

// -----------------------------------------------------------------

// Task-4

// Broken Loop

// Condition:
// Return the sum of all numbers from 1 to n (inclusive).

function sumRange(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// console.log(sumRange(5));

// -----------------------------------------------------------------

// Task-5

// Broken Loop

// Condition:
// Return the sum of all numbers in the array.

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    // console.log(i, numbers[i])
    total += numbers[i];
  }
  return Number(total.toFixed(2));
}

// console.log(sumArray([10, 20.2244, 30.524]));

// -----------------------------------------------------------------

// Task-6

// Broken Loop

// Conditiona:
// Count how many even numbers are present in the array.

function countEven(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++)
    if (numbers[i] % 2 === 0) {
      count++;
    }
  return count;
}

// console.log(countEven([2, 4, 6, 8, 10, 15, 12, 8, 6]));

// -----------------------------------------------------------------

// Task-7

// Debug a Broken Array Problem (Multi-Bug Edition)

/* 
getLastTwo(arr)
Purpose: should return the last 2 elements of the array as a new array.
Bugs: 2 bugs - 1 runtime/logic.
Expected: getLastTwo([10,20,30,40])-> [30,40]
*/

function getLastTwo(arr) {
  return arr.slice(arr.length - 2);
}

// console.log(getLastTwo([10, 20, 30, 40, 50]));

// -----------------------------------------------------------------

// Task-8

/* 
findIndexOfValue(arr, target)
Purpose: should return the index of target inside arr, or -1 if not found.
Bugs: 2 bugs - 1 runtime, 1 logic (off-by-one causes the runtime error).
Expected: findIndexOfValue([10,20,30],20) -> 1
*/

function findIndexOfValue(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(i, arr[i])
    if (arr[i].toString() === target.toString()) {
      return i;
    }
  }
  return -1;
}

// console.log(findIndexOfValue([10, 20, 30], 30));

// -----------------------------------------------------------------

// Task-9

/* 
averageOfPositives(arr)
Purpose: should return the average of only the positive numbers in arr.
Bugs: 3 bugs - all logic errors.
Expected: averageOfPositives([-5,10,15,-2,5]) -> 10
*/

function averageOfPositives(arr) {
  let total = 0;
  let count = arr.length;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] > 0) {
      total = total + arr[i];
    }
  }
  return Number(total / count).toFixed(2);
}

console.log(averageOfPositives([-5, 10.22, 15.243232, -2, 5]));
