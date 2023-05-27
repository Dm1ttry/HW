// Task 1

const colors: string[] = ["red", "green", "blue"];
console.log(colors.length);

// Task 2

const animals: string[] = ["monkey", "dog", "cat"];
console.log(animals.slice(-1));

// Task 3

const numbers: number[] = [5, 43, 63, 23, 90];
numbers.splice(0);
console.log(numbers);

const numbers2: number[] = [5, 43, 63, 23, 90];
for (let i = 0; i <= numbers2.length; i++) {
  numbers2.shift();
  numbers2.pop();
  numbers2.shift();
}
console.log(numbers2);

const numbers3: number[] = [5, 43, 63, 23, 90];
let count: number = 0;
for (let del of numbers2) {
  count++;
  numbers2.splice(0, count);
}
console.log(numbers2);

// Task 4

const students: string[] = ["Polina", "Dasha", "Masha"];
students.splice(-1, 1, "Borya");
students.splice(0, 1, "Andrey");
console.log(students);

//  Task 5

const cats: string[] = ["Gachito", "Tom", "Batman"];
for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}
for (const cat of cats) {
  console.log(cat);
}

// Task 6

const evenNumbers: number[] = [2, 4, 6, 8, 10];
const oddNumbers: number[] = [1, 3, 5, 7, 9];
for (let num of evenNumbers) {
  oddNumbers.push(num);
}
console.log(oddNumbers);
console.log(oddNumbers.indexOf(8));

// Task 7

const binary = [0, 0, 0, 0];
console.log(binary.join("1"));

// ADVANCED level

// Task 1

function Palindrone(UserWord: string): void {
  let word: string[] = UserWord.split("");
  let word2: string[] = word.slice().reverse();
  if (word.join().toLowerCase() === word2.join().toLowerCase()) {
    console.log(true);
  } else {
    console.log(false);
  }
}
Palindrone("Дом");
Palindrone("Боб");

// Task 2

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
let countMatrix = 0;
let sumMatrix = 0;
for (const Key of matrix) {
  for (const keys of Key) {
    countMatrix++;
    sumMatrix += keys;
  }
}
console.log(sumMatrix / countMatrix);

// Task 3

const mixedNumbers: number[] = [-14, 24, -89, 43, 0, -1, 412, 4];
const PositiveNumbers: number[] = [];
const NegativeNumbers: number[] = [];
for (let numbers of mixedNumbers) {
  if (numbers >= 0) {
    PositiveNumbers.push(numbers);
  }
  if (numbers < 0) {
    NegativeNumbers.push(numbers);
  }
}
console.log(PositiveNumbers);
console.log(NegativeNumbers);

// Task 4

const RandomArr: number[] = [];
const CubeArr: number[] = [];
let MaxVal = 20;
let min = 5;
for (let i = 0; i <= min; i++) {
  RandomArr.push(Math.round(Math.random() * MaxVal));
}
for (let number of RandomArr) {
  CubeArr.push(number ** 3);
}
console.log(RandomArr);
console.log(CubeArr);
