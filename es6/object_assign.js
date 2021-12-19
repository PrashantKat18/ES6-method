// **********************Object Assign ********************
// The Object.assign() can merge source objects into a target object
//  which has properties consisting of all the properties of the source objects.
let box = {
    height: 10,
    width: 20
};

let style = {
    color: 'Red',
    borderStyle: 'solid'
};

let styleBox = Object.assign(box, style)
console.log(styleBox);


// ******************** Object is ******************
// JavaScript Object.is() to check if two values are the same.
// obejct.is() behaves like the === operator with two difference.
let amount = +0,
    volume = -0;
console.log("object is",Object.is(amount,volume));

