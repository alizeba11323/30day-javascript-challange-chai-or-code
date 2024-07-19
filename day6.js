const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
numbers.push(6);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(10);
console.log(numbers);
numbers.shift();
console.log(numbers);
const updatedArr = numbers.map((num) => num * 2);
console.log(updatedArr);
const updatedEvenArr = numbers.filter((num) => num % 2 === 0);
console.log(updatedEvenArr);
const updatedsumArr = numbers.reduce((total, currentVal) => {
  total += currentVal;
  return total;
}, 0);
console.log(updatedsumArr);
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
numbers.forEach((num) => console.log(num));

const mat = [
  [1, 2, 3],
  [3, 4, 5],
  [6, 7, 8],
];

console.log(mat);
console.log(mat[0][1]);
