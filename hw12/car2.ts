import { Cars0 } from "./hw12.1";

export class Car2 extends Cars0 {
    constructor(Brand: string, Type: string, Price: number, MaxSpeed: number) {
        super(Brand, Type, Price, MaxSpeed);
    }

    getInfo(): void {
        console.log(
            `This is ${this.Brand}.It has ${this.Type} engine and max speed equal to ${this.MaxSpeed}.Approximetly cost of the car is ${this.Price}`
        );
    }

    setMaxSpeed(MaxSpeed: number): void {
        if (MaxSpeed < 0) {
            throw new Error("Error Price can't < 0");
        }
        if (MaxSpeed === 0) {
            throw new Error("Error Price can't = 0");
        } else {
            this.MaxSpeed = MaxSpeed;
        }
    }
}
