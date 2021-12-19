// A module organizes a related set of JavaScript code. 
// A module can contain variables and functions. ... Variables and functions within a module
// should be exported so that they can be accessed from within other files.


// https://www.javascripttutorial.net/es6/es6-modules/

export let a = 10,
           b = 20,
           result = 0;

export function sum() {
  result = a + b;
  return result;
}

export function multiply() {
  result = a * b;
  return result;
}
