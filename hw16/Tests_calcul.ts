import Calculator from "./Calculator";

export default class TestCalulator {
    static postestSum() {
        const num1 = 10;
        const num2 = 10;
        const expectedres = 20;

        let calculated = new Calculator(num1, num2, "Sum").result();
        if (expectedres === calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static negtestSum() {
        const num1 = 10;
        const num2 = 10;
        const expectedres = 20;

        let calculated = new Calculator(num1, num2, "Sum").result();
        if (expectedres !== calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static postestSubtraction() {
        const num1 = 20;
        const num2 = 10;
        const expectedres = 10;

        let calculated = new Calculator(num1, num2, "Subtraction").result();
        if (expectedres === calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static negtestSubtraction() {
        const num1 = 20;
        const num2 = 10;
        const expectedres = 10;

        let calculated = new Calculator(num1, num2, "Subtraction").result();
        if (expectedres !== calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static postestSplit() {
        const num1 = 10;
        const num2 = 2;
        const expectedres = 5;

        let calculated = new Calculator(num1, num2, "Split").result();
        if (expectedres === calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static negtestSplit() {
        const num1 = 10;
        const num2 = 2;
        const expectedres = 5;

        let calculated = new Calculator(num1, num2, "Split").result();
        if (expectedres !== calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static postestMultiplication() {
        const num1 = 3;
        const num2 = 2;
        const expectedres = 6;

        let calculated = new Calculator(num1, num2, "Multiplication").result();
        if (expectedres === calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static negtestMultiplication() {
        const num1 = 3;
        const num2 = 2;
        const expectedres = 6;

        let calculated = new Calculator(num1, num2, "Multiplication").result();
        if (expectedres !== calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static postestExponentiation() {
        const num1 = 2;
        const num2 = 2;
        const expectedres = 4;

        let calculated = new Calculator(num1, num2, "Exponentiation").result();
        if (expectedres === calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }

    static negtestExponentiation() {
        const num1 = 2;
        const num2 = 2;
        const expectedres = 4;

        let calculated = new Calculator(num1, num2, "Exponentiation").result();
        if (expectedres !== calculated) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
}
