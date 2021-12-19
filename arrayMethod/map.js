// 1. map()
// This method creates a new array with the results of calling a provided 
// function on every element in this array.

// EXAMPLE-1
let arr = [1, 2, 3, 4, 5, 4, 7, 8, 9, 10];
let result = arr.map(elem => elem * 2);
console.log(result);

// EXAMPLE-2 
let emp = [
{
    name: 'Prashant',
    empId: 701895,
    number: 9044681817,
}, 
{
    name: 'katiyar',
    empId: 701895,
    number: 9044681817,
}]

let result1 = emp.map(elem => ({
    name: elem.name + " Senior Engineer",
    empId: elem.empId,
    number: elem.number
}))

console.log(result1);