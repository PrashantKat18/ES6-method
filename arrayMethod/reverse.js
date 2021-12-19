// reverse( )
// This method reverses an array in place. 
// Element at last index will be first and element at 0 index will be last.

// EXAMPLE -1 
const arr = ["Prashant", "katiyar", "lakhan"];
const reverse = arr.reverse();
console.log(reverse);

// EXAMPLE-2 
const obj = [{
    name: "prashant",
    email: "p@gmail.com",
    number: "9044682217"
},
{
    name: "komal",
    email: "k@gmail.com",
    number: "9044681117"
},
{
    name: "surbhi",
    email: "s@gmail.com",
    number: "9044682887"
}]

const reverseObj = obj.reverse();
console.log(reverseObj);