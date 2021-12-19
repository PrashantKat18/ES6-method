// • for/in - loops through the properties of an object
// • for/of - loops through the values of an iterable object
// **********  for **********
const cars = ["BMW", "Volvo", "Saab", "Ford", "Ford"];
let i, len, a;
for (i = 0; len = cars.length, i < len; i++) {
    console.log(cars[i]);
}
let b = cars.filter(element => element == "Ford")
console.log(b.length);

// ************** for/in ******************

const person = { f_name: "john", l_name: "kat" };
for (let x in person) {
    console.log(person[x]);// john kat
}


// *****************for/of***********************

const fruits = [{
    name: "prashant",
    email: "p@gmail.com",
    number: "8840091275"
},
{
    name: "shivam",
    email: "shivam@gmail.com",
    number: "8840791275"
},
{
    name: "komal",
    email: "k@gmail.com",
    number: "9840091275"
}
]

for (let x of fruits) {
    console.log("length is", x);
}
