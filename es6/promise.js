// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// OR

// A promise is an object that may produce a single value some time in the future.either a resolved value or not resolved.

// So Basically promise used to handle asychronous operations in javascript So we can easy to manage when dealing with multiple asychorous operations.


// A Promise has three states.
       
//     I. Pending: you don’t know if you will complete learning JavaScript by the next month.
//     II. Fulfilled: you complete learning JavaScript by the next month. (successful)
//     III. Rejected: you don’t learn JavaScript at all.  (failed)



// example 
let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    if (completed) {
        resolve("I have completed learning JS.");
        console.log("I have completed learning JS.");
    } else {
        reject();
        console.log("I haven't completed learning JS yet.");
    }
});
