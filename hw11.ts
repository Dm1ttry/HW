// Task 1

const url = "https://jsonplaceholder.typicode.com/posts";
async function getPost(num: number) {
    const response = await fetch(url);
    const res = await response.json();
    console.log(res[num].body);
    return res;
}

const getData = async () => {
    await getPost(15).catch(() => {
        console.log(new Error("Err"));
    });
    await getPost(23).catch(() => {
        console.log(new Error("Err"));
    });
    await getPost(7).catch(() => {
        console.log(new Error("Err"));
    });
    await getPost(3).catch(() => {
        console.log(new Error("Err"));
    });
};
getData();

//  Task 2

const urls = `https://jsonplaceholder.typicode.com/todos`;

async function getTodos() {
    const response1 = await fetch(urls);
    const json1 = await response1.json();
    return json1;
}

async function printTodos(num1: number) {
    const arr = new Array();
    await getTodos().then((val) => {
        arr.push({ id: val[num1].id }), arr.push({ title: val[num1].title });
        // arr.push({ userId: val[0].userId }),
        // arr.push({ completed: val[0].completed }),
    });
    console.log(arr);
}
printTodos(2);
