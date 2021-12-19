//****************************var,let,const example ********************

// Var – Var variable can be updated and re-declared within its scope.
// example -1 
var a = "prashant";
var a = "prashant katiyar"
// a = "prashant katiyar";
console.log(a); //prashant katiyar


// exapmle- 2
var greeter = "hey hi";
var times = 4;
if (times > 3) {
    var greeter = "say Hello instead"; 
}
console.log(greeter) // "say Hello instead"


// Let – let variable can be update but not re-declared 
let greeting = "say Hi";
greeting = "hello" //can be update but not re-declare
let time = 4;

if (time > 3) {
     let hello = "say Hello instead";
     hello = "sir"
     console.log(hello);// "say Hello instead"
 }
console.log(greeting) // hello is not defined

// Const – const variable can neither be updated nor re-declared.
const name_s = "say Hi";
// name_s = "say Hello instead";
console.log(name_s); // error: Assignment to constant variable. 