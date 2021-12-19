var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("Hello world!");
});

// 1 .map()
const arr = [
    { "name": "Peter", "age": 22, "country": "United States"},
    { "name": "Rahul", "age": 22, "country": "United States"},
    { "name": "Komal", "age": 22, "country": "United States"}];
const maped = arr.map(element => "name :" + element.name + "katiyar"  +"age :" + element.age + 11);
console.log(maped);

// 2 . filter
const arr1 = [1,2,2,2,3,5,4,5,6,7];
const filtered1 = arr1.filter(element => element === 2);
const filtered = arr1.filter(element => element === 3);
console.log( "no of 3 count",filtered.length," \n","no of 2 count" , filtered1.length);


app.listen(3000);