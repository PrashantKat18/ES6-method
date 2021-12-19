// sort( )
// This method is used to arrange/sort array’s elements
// either in ascending or descending order.

const arr = [1, 2, 2, 3, 8, 96, 7, 8, 0, 5];
const arr1 = ["x","y","f","d","k","l"]
const ascend = arr1.sort((a, b) => a > b ? 1 : -1);
const descend = arr.sort((a, b) => a > b ? -1 : 1);

console.log("ascend order = " ,ascend);
console.log("descend order = " ,descend);
