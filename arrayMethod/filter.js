// filter( )
// This method creates a new array with only elements that passes the 
// condition inside the provided function.

const arr = [2,3,1,4,5,2,2,4,5,5,5,2,4];
const filtered = arr.filter(elem => elem == 2 || elem== 4 || elem == 5) ;
const onlyTwo =  filtered.filter(elem=> elem == 2);
console.log("count = ", onlyTwo.length, " arr = ",onlyTwo);
const onlyFour =  filtered.filter(elem=> elem == 4);
console.log("count = ", onlyFour.length, " arr = ",onlyFour);
const onlyFive =  filtered.filter(elem=> elem == 5);
console.log("count = ", onlyFive.length, " arr = ",onlyFive);