// Task 3 
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for(const KeyStudent in student){
    console.log(`Key ${KeyStudent}`);
    console.log(`Val ${student[KeyStudent]}`);
}


// Task 4 
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};
console.log(`${colors["ru pum pu ru rum"].red} и ${colors["ru pum pu ru rum"].blue}`);


// Task 5 
let salaries = {
    dima: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199
}
let sum = 0;
let count = 0;
for(const name in salaries ){
    count++;
    sum +=salaries[name];
}
console.log(sum/count);


// ADVANCED level

//  Task 2 
let student1 = {
    name: 'Polina',
    age: 27,
}
let student2 = {
    name: 'Polina',
    age: 27,
}
if(student1.age === student2.age && student1.name === student2.name){
    console.log(true);
}else{
    console.log(false);
}


