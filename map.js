// Map() method is used creating new array from existing array by applying to each one of the element of first array
// write a program to double elements of array

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]