


// *************************Arrow function **************************
// Arrow function provide a concise way to write function.
// Arrow syntax automatically binds this to the surrounding code's context.
// The syntax allows an implicit return when there is no body block,

// why use - Arrow functions are best for callbacks or methods like map, reduce, or forEach.
// syntax
let myFunction = (arg1, arg2, ...argN) => {
    console.log("arg1",1);
}
// Example 1: Arrow Function with No Argument
myFunction()
let x = ()=> console.log("hi");
x(); // Hello

// Example 2: Arrow Function with One Argument
let greet = x => console.log(x);
greet('Hello'); // Hello 

// Example 3: Arrow Function as an Expression
let age = 19;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); // Baby


// Example 4: Multiline Arrow Functions

let sum = (a,b)=> {
  let result = a+b;
  return result;
}

let results = sum(5,8);
console.log(results);

