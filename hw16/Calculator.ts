export default class Calculator {
    constructor(
        public number1: number,
        public number2: number,
        public medod: string
    ) {
        this.number1 = number1;
        this.number2 = number2;
        this.medod = medod.toString();
    }
    result() {
        switch (this.medod) {
            case "Sum":
                return this.Sum();
            case "Subtraction":
                return this.Subtraction();
            case "Split":
                return this.Split();
            case "Multiplication":
                return this.Multiplication();
            case "Exponentiation":
                return this.Exponentiation();
        }
    }

    Sum() {
        return this.number1 + this.number2;
    }
    Subtraction() {
        return this.number1 - this.number2;
    }
    Split() {
        return this.number1 / this.number2;
    }
    Multiplication() {
        return this.number1 * this.number2;
    }
    Exponentiation() {
        return this.number1 ** this.number2;
    }
}