// unshift( )
// This method adds one or more elements
// to the beginning of an array and returns the new length of the array.


// EXAMPLE-1 
const arr = ["c","d","e"];
const result = arr.unshift("a","b");
console.log("now arr = ", arr);


// EXAMPLE-2
const obj = [{
    name:"prashant",
    email:"p@gmail.com",
    phoneNumber:884430192
},
{
    name:"Rahul",
    email:"R@gmail.com",
    phoneNumber:8822430192
},
{
    name:"Lokhi",
    email:"l@gmail.com",
    phoneNumber:8822430192
}];

obj.unshift({
    name:"mata ji",
    email:"mata@gmail.com",
    phoneNumber:7002128229
},
{
    name:"lala ji",
    email:"lala@gmail.com",
    phoneNumber:7002128229
})

console.log(obj.reverse());