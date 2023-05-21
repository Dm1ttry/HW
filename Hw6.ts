// Task 1
type IOdj = {
    FirstName?: string,
    LastName?: string,
}

const Obj : IOdj={
    FirstName: "Dima",
    LastName: "Gaponov",
}
delete Obj.LastName;
delete Obj.FirstName;
console.log(Obj);


// Task 2 
const CheckObject ={
    FirstName: "Dima",
    LastName: "Gaponov",
}
if(CheckObject.FirstName === "Dima"){
    console.log(true);
}else{
    console.log(false);
}


//  Task 6 
type IUsers = {
    UserLogin:string,
    UserPassword: string
}
function Registration(Login: string, Password: string): IUsers {
    const RegistUser: IUsers ={
        UserLogin: Login,
        UserPassword: Password
    }
    return RegistUser;
}
function CheckUser(Login: string, Password: string, RegistUser: IUsers): void{
    if(Login === RegistUser.UserLogin && RegistUser.UserPassword === Password){
        console.log ('Добро пожалоВать');
    }else{
        console.log ('Неверные данные');
    }
}  
const User1 = Registration('Dima','1214');
console.log(User1);
CheckUser('Dima','1214', User1);


// ADVANCED level

// Task 3 
interface Icat{
    name: string,
    age: number
}
const cat: Icat= {
    name: 'Енчик',
    age: 3,
}
let json =(JSON.parse(JSON.stringify(cat)));
let assign = (Object.assign({}, cat));
cat.age = 10;
console.log(json, assign, cat);