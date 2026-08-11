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
console.log(canAttendFinalExam(90, 80));
