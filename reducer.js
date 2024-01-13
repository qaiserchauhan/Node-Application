/* reduce() method: It reduces all the elements of the array to a single value by repeatedly
applying a function. It is an alternative of using a loop and updating the result for every
scanned element.*/

const arr = [2,6,4,6,4,3]
const sum = arr.map(function (result, item) {
    return result + item;
},0);
console.log(sum)
