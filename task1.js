// Broken Conditional

function checkAdult(age) {
  if ((age = 18)) {
    return "Adult";
  }
  return "Minor";
}

console.log(checkAdult(15));
