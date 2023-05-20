// Task 1 
function getSum(Num: number): number {
    let sum = 0;
    for(let i= 0 ; i <= Num; i++){
        sum += i;
    }
    return sum;
}
console.log(getSum(100));


// Task 2 
function creditPercent(SumCredit : number): number{
    return ((SumCredit * 0.17) * 5) ;
}
console.log(creditPercent(2000));


// Task 3 
function trimString(String: string , FirtVal: number , LastVal: number): string{
    let formatstr = String.slice(FirtVal, LastVal);
    return formatstr;
}
console.log(trimString("Написать функцию  которая в качестве аргумента",4,30))


// Task 4 
function getSumNumbers(UserNum : number ): number{
    let strUsNum = ""+UserNum;
    let sum = 0;
    for(let i = 0 ;i < strUsNum.length; i++){
        sum += + strUsNum[i];
    }
    return sum;
}
console.log(getSumNumbers(2012));


// Task 5 
function getSum2(FirstNum: number, SecondNum: number): number{
    let SumNumbers = 0;
    if (FirstNum < SecondNum ){
        for(let Sum = FirstNum ;  Sum <= SecondNum ; Sum ++){
            SumNumbers += Sum;
        }
        return SumNumbers;
    }
    if (FirstNum > SecondNum ){
        for(let Sum = FirstNum ;  Sum >= SecondNum ; Sum ++){
            SumNumbers += Sum;
        }
        return SumNumbers;
    }else{
        return FirstNum;
    }
}
console.log(getSum2(0,3));


// Task 6 
function foo(Namefunc:string):string{
    return Namefunc = "foo";
}
function boo(Namefunc:string):string{
    return Namefunc = "boo";
}

function fooboo(bool:boolean, foo:Function, boo:Function ):Function{
    if(bool === true){
        return foo();
    }else{
        return boo();
    }
}
console.log(fooboo(true,foo,boo));


// Task 7 
function Factorial(UserNumber: number): number{
    let sum = 1;
    for(let i = 1; UserNumber >= i ; UserNumber--){
         sum *= UserNumber;
    }
    return sum;
}
console.log(Factorial(4));


// ADVANCED level

// Task 1 
function  Triengle(FirstSideA: number, SecondSideB: number , TrirdSideC: number): boolean {
    if(Number.isInteger(FirstSideA) === Number.isInteger(FirstSideA) === Number.isInteger(FirstSideA) === false){
        return false
    }
    if(FirstSideA + SecondSideB > TrirdSideC && TrirdSideC + SecondSideB >  FirstSideA && FirstSideA + TrirdSideC >  SecondSideB){
        return true;
    }else{
        return false
    }
}
console.log(Triengle(2, 1 ,1))


