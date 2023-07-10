// import  expect  from "jest";
// import { expect } from "chai";

import Calculator from "../../hw16/Calculator";

// Jest
describe("Calculator tests", () => {
    test(" Check for negative number in addition", () => {
        const num1 = -12;
        const num2 = -15;
        const result = -27;
        const calculator = new Calculator(num1, num2, "Sum").result();
        expect(calculator).toEqual(result);
    });

    test(" Check for positive number in Subtraction", () => {
        const num1 = 2;
        const num2 = 2;
        const result = 0;
        const calculator = new Calculator(num1, num2, "Subtraction").result();
        expect(calculator).toEqual(result);
    });
    
    test(" Check for float in Multiplication", () => {
        const num1 = 2;
        const num2 = 2.002;
        const result = 4.004;
        const calculator = new Calculator( num1,num2,"Multiplication").result();
        expect(calculator).toEqual(result);
    });

    test(" Check for sting in Split", () => {
        const num1 = 2;
        const num2 = "2dd";
        const result = NaN;
        const calculator = new Calculator(num1, Number(num2), "Split").result();
        expect(calculator).toEqual(result);
    });

    test(" Check for zero in Split", () => {
        const num1 = 2;
        const num2 = 0;
        const result = Infinity;
        const calculator = new Calculator(num1, num2, "Split").result();
        expect(calculator).toEqual(result);
    });

    test(" Check for zero in Exponentiation", () => {
        const num1 = 10;
        const num2 = 0;
        const result = 1;
        const calculator = new Calculator(num1,num2,"Exponentiation").result();
        expect(calculator).toEqual(result);
    });

    
    test(" Check for zero in Multiplication", () => {
        const num1 = 10;
        const num2 = 0;
        const result = 0;
        const calculator = new Calculator( num1,num2, "Exponentiation").result();
        expect(calculator).toEqual(result);
    });
});