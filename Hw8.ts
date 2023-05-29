//  Task 1

const fibonacci1: number[] = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
fibonacci1.forEach((value) => console.log(value));

// Task 2

const users: string[] = [
    "Darya",
    "Masha",
    "Denis",
    "Vitaliy",
    "Polina",
    "Anton",
];
const users2: string[] = users.map(
    (value, index) => `member ${index + 1}: ${value}`
);
console.log(users2);

// Task 3

const numbers: number[] = [7, -4, 32, -90, 54, 32, -21];
const numberPositive: number[] = numbers.filter((value) => {
    if (value >= 0) {
        return value;
    }
});
console.log(numberPositive);

// Task 4

const fibonacci: number[] = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
];
const sum1: number = fibonacci.reduce(
    (prevVal, curValue) => prevVal + curValue
);
console.log(sum1);

// Task 5

const numbers2: number[] = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbers2.find((value) => value % 2 === 0));

// Task 6

const numbers3: number[] = [1, 15, 30, 5];
console.log(numbers3.some((value) => value % 3 === 0 && value % 5 === 0));
const numbers4: number[] = [1, 11, 33, 5];
console.log(numbers4.some((value) => value % 3 === 0 && value % 5 === 0));

// Task 7
const sumcube: number[] = [10, 2, 8];
let sum: number = 0;
sumcube.every((value) => {
    for (let i = 0; i < sumcube.length; i++) {
        let num = sumcube[i];
        sum += Math.pow(num, 2);
    }
    if (sum % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
});

// Task 8

let components = new Map<string, number>([
    ["Огурцы", 110],
    ["Помидоры", 200],
    ["Перец", 15],
    ["Соль", 10],
    ["Лук", 60],
    ["Сметана", 150],
]);
for (let value of components.entries()) {
    const key = value[1];
    if (key > 100) {
        console.log(value[0]);
    }
}

// Task 9

const numbers5: number[] = [
    1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4,
    5, 61, 2, 4, 5, 6, 3, 5,
];
const singularNumber = new Set(numbers5);
console.log(singularNumber);

// Task 10
const elements: string[] = [
    "elem1",
    // "elem2",
    "elem3",
];
let [elem1, elem2, elem3] = elements;
elements.forEach((val, index, arr) => {
    if (elem2 === "elem3" && index == 1) {
        return arr.splice(1, 0, (elem2 = "eee"));
    }
    if (elem3 === undefined && elem2 === "elem2") {
        return arr.splice(1, 0, (elem3 = "bbb"));
    }
});
console.log(elem3);
console.log(elem2);

// Task 11
interface IUser {
    UserName?: string;
    surname?: string;
    age?: string;
}
const User: IUser = {
    // UserName: "Петр",
    surname: "Петров",
    age: "20 лет",
};
let { UserName = "Аноном", surname = "Анонимович", age = "? лет" } = User;
console.log(UserName);
console.log(surname);
console.log(age);
