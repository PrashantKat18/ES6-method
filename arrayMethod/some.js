// some( )
// This method checks if at least one element in the array that passes the condition, 
// returning true or false as appropriate.

const arr = [1, 2, 3, 4, 5, 6, 7];
const greaterNum = arr.some(elem => elem > 5);
console.log(greaterNum);