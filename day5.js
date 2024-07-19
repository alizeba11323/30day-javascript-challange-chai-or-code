function getEvenOrOdd(num) {
  num % 2 == 0 ? console.log("Even") : console.log("Odd");
}
function SquareFunc(num) {
  return num * num;
}

getEvenOrOdd(10);
const sqr = SquareFunc(2);
console.log(sqr);

const maxNumber = function (a, b) {
  a > b ? console.log(a) : console.log(b);
};

maxNumber(3, 1);

const concatStr = function (str1, str2) {
  return str1 + " " + str2;
};

concatStr("str1", "str2");

const sumOfNumber = (num1, num2) => num1 + num2;
const checkStr = (str, match) => str.includes(match);

const sumValue = sumOfNumber(1, 2);
console.log(sumValue);
console.log(checkStr("zeba", "a"));

const productNum = (a, b = 1) => a * b;
const greet = (name, age = 20) => `hello ${name}, now you are ${age} years old`;
console.log(productNum(2));
console.log(greet("zeba"));

const higherFunc = (num, cb) => {
  for (let i = 0; i < num; i++) {
    cb(i);
  }
};

higherFunc(3, function (i) {
  console.log("Hello World " + i);
});

const higerFunc1 = (num, cb1, cb2) => {
  const res = cb1(num);
  const result = cb2(res);
  return result;
};

const result = higerFunc1(
  3,
  function (num) {
    return num + 1;
  },
  function (res) {
    return res * 2;
  }
);

console.log(result);
