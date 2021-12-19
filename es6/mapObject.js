// // example -1 
// // Map is a collection of elements where each element is stored as a Key, 
// // value pair. 
//  //Map object can hold both objects and primitive values
// // as either key or value. When we iterate over the map object it returns the key,
// // value pair in the same order as inserted.
// let employee = [{
//     name: "Prashant",
//     emailId: "prashant@gmail.com",
//     phoneNumber: 8840091275
// },
// {
//     name: "Rahul",
//     emailId: "rahul@gmail.com",
//     phoneNumber: 8850091275
// },
// {
//     name: "Sachin",
//     emailId: "shachin@gmail.com",
//     phoneNumber: 8846091275
// }
// ]
// console.log(employee);
// let newEmployeeObject = employee.map(elem => ({
//     name:elem.name + " Senior Engineer",
//     emailId :elem.emailId,
//     phoneNumber :elem.phoneNumber
// }))
// console.warn(newEmployeeObject);

// // example -2 
// const arr = [1,2,3,4,5];
// const newarr = arr.map(elem => elem*2)
// console.warn(newarr); 

let emp = [{
    name:"prashant",
    email:"prashant@gmail.com"
},
{
    name:"shivam",
    email:"prashant@gmail.com"
}
]

let result =  emp.map(elem=>({
     name:elem.name + " katiyar",
     email:elem.email
}))
console.log(result);
