
// JavaScript uses three dots (...) for both the rest and spread operators. 
// But these two operators are not the same.

// ************** Spread operator *******************

// The spread operator allows you to spread out elements
//  of an iterable object such as an array,a map, or a set. 

// For example: 
const odd = [1,3,5]; 
const combined = [2,4,6, ...odd]; 
console.log(combined);

// object Example
let obj1 = {
    name:'prashant',
    email:'prashantkat'
}

let obj2 = {
    number:'8840091275',
    address:'kanpur nagar'
}

let result = {...obj1,...obj2}
console.log(result);
// ***********Rest Operator**********

// Rest operator basically denoted by (...) 
