// shift( )
// This method removes the first element from an array and returns that element.


// EXAMPLE - 1
const arr = ["a","b","c","d","e"];
const result = arr.shift();
console.log("removed value = ",result ,"\n","now arr is = ", arr);

// EXAMPLE-2 
const obj = [{
    name:"prashant",
    email:"p@gmail.com",
    number:8840091275
},
{
    name:"komal",
    email:"p@gmail.com",
    number:8840091275
},
{
    name:"jhoti",
    email:"p@gmail.com",
    number:8840091275
}];


const result1 = obj.shift();
console.log("removed object is",result1 ,"\n", "now object is = ",obj);