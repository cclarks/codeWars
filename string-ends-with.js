// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// -----------------------------------------------------------

function end(str, target) {
  return (str.substr(-target.length) === target);
}

// We use the subtring() with the negative value of the lengths of target. We could use -1 to get the last element but if the target is actually longer than one letter then the program will provide the wrong information. The we return true or false as needed.
