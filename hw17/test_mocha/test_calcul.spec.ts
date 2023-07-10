import  assert  from "assert";
import Calculator from "../../hw16/Calculator";

// Mocha
describe("Calculator tests", function(){

    it(" Check for negative number in addition", function(){
        const num1 = -12;
        const num2 = -15;
        const expect = -27
        const calculator = new Calculator(num1, num2, "Sum").result();
        assert.equal(calculator, expect), "Test failed";
    });

    it(" Check for positive number in Subtraction", function () {
        const num1 = 2;
        const num2 = 2;
        const expect = 0;
        const calculator = new Calculator(num1, num2, "Subtraction").result();
        assert.equal(calculator, expect, "Test failed");
    });

    it(" Check for float in Multiplication", function(){
        const num1 = 2;
        const num2 = 2.002;
        const expect = 4.004
        const calculator = new Calculator(num1, num2, "Multiplication").result();
        assert.equal(calculator, expect, "Test failed"); 
    });

    it(" Check for sting in Split", function(){
        const num1 = 2;
        const num2 = "2dd";
        const expect = NaN
        const calculator = new Calculator(num1, Number(num2), "Split").result();
        assert.equal(calculator, expect, "Test failed"); 
    });

    it(" Check for zero in Split", function(){
        const num1 = 2;
        const num2 = 0;
        const expect = Infinity;
        const calculator = new Calculator(num1, num2, "Split").result();
        assert.equal(calculator, expect, "Test failed"); 
    });

    it(" Check for zero in Exponentiation", function () {
        const num1 = 10;
        const num2 = 0;
        const expect = 1;
        const calculator = new Calculator(num1, num2, "Exponentiation").result();
        assert.equal(calculator, expect, "Test failed");
    });

    it(" Check for zero in Multiplication", function () {
        const num1 = 10;
        const num2 = 0;
        const expect = 0;
        const calculator = new Calculator(num1, num2, "Exponentiation").result();
        assert.equal(calculator, expect, "Test failed");
    });
})
