// pop( )
// This method removes the last element from the end of array and returns that element.

// EXAMPLE-1 
const arr = [1, 2, 3, 4, 5, 6, 8];
const pop = arr.pop();
console.log("arr = ", arr, "length = ", pop);

// EXAMPLE-2 
const obj = [{
    name: "prashant",
    email: "p@gmail.com",
    number: 9040019292,
    address: "kanpur nagar"
},
{
    name: "komal",
    email: "p@gmail.com",
    number: 9044682817,
    address: "kannauj"
},
{
    name: "debika katiya",
    email: "d@gmail.com",
    number: 9044682817,
    address: "Assam"
}
];


console.log("Remove object = ",obj.pop());
console.log("obj is =",obj);