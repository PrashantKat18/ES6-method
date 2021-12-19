
// Q- find the largest number
function largestNumber() {
    const arr = [4, 2, 1, 0, 34, 0, 52, 4];
    let largeNumber = arr[0];
    for (i = 0; i <= largeNumber; i++) {
        if (arr[i] > largeNumber) {
            largeNumber = arr[i]
        }
    }
    console.log(largeNumber);
}

largestNumber();

function duplicate() {
    const arr = [2, 2, 2, 21, 2, 1, 11, 11];
    let result = arr.filter(elem => elem === 2 || elem === 1);
    console.log("two and one value = ",result);
    let onlyOne = result.filter(elem => elem === 1);
    console.log("only one ",onlyOne.length);
}

duplicate();