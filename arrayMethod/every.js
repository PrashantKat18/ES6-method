// every( )
// This method checks every element in the array that passes the condition, 
// returning true or false as appropriate.

const arr = [1,2,3,4,5,6,7];
const result = arr.every(elem => elem < 8);
console.log(result);