// push( )
// This method adds one or more elements to the end of array and returns
// the new length of the array.

// EXAMPLE-1 
const arr = [1, 2, 3, 4, 5, 6, 8];
const pushed = arr.push(6, 8);
console.log("arr = ", arr, "length = ", pushed);

// EXAMPLE-2 
const obj = [{
    name: "prashant",
    email: "p@gmail.com",
    number: 9040019292,
    address: "kanpur nagar"
},
];

obj.push({
    name:"Rekha ji",
    email:"a@gmail.com",
    number:7002128229,
    address:"pihani"
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
});
const len = obj.length;

console.log(len);

console.log(obj.reverse());

const result = obj.map(elem=>({
    name:elem.name,
    email:elem.email,
    number:elem.number,
    address:elem.address
}));

console.log(result);