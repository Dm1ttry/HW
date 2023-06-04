//  Task 1
class Car {
    constructor(
        protected BrandCar: string,
        protected engineType: string,
        protected PriceCar: number,
        protected MaxSpeedCar: number
    ) {
        this.BrandCar = BrandCar;
        this.engineType = engineType;
        this.PriceCar = PriceCar;
        this.MaxSpeedCar = MaxSpeedCar;
    }

    info(): void {}
}

class SportCar extends Car {
    constructor(
        private Brand: string,
        private Type: string,
        private Price: number,
        private MaxSpeed: number
    ) {
        super(Brand, Type, Price, MaxSpeed);
    }
    infosport(): void {
        console.log(
            `This is ${this.Brand}.It has ${this.Type} engine and max speed equal to ${this.MaxSpeed}.Approximetly cost of the car is ${this.Price}`
        );
    }
}

class LuxuryCar extends Car {
    constructor(
        private Brand: string,
        private Type: string,
        private Price: number,
        private MaxSpeed: number
    ) {
        super(Brand, Type, Price, MaxSpeed);
    }
    infoluxury(): void {
        console.log(
            `This is ${this.Brand}.It has ${this.Type} engine and max speed equal to ${this.MaxSpeed}.Approximetly cost of the car is ${this.Price}`
        );
    }
}
const sport = new SportCar("Bugatti", "8.0 gas", 90000, 360);
const luxury = new LuxuryCar("Lexus", "5.0 gas", 10000, 220);
sport.infosport();
luxury.infoluxury();

//  Task 2

class Human {
    constructor(public FirstName: string) {
        this.FirstName = FirstName;
    }

    SayName(SurName: string) {
        console.log(`My name is ${this.FirstName} ${SurName}`);
    }
}
const hum1 = new Human("Anton");
const hum2 = new Human("Ivan");
hum1.SayName.call(hum1, "Antonov");
hum2.SayName.apply(hum2, ["Ivanov"]);

// Task 3

class Cars {
    constructor(public Doors: number) {
        this.Doors = Doors;
    }

    infoCars(Hand: string) {
        console.log(
            `This car has ${this.Doors} doors and this is ${Hand} drive car`
        );
    }
}
const car1 = new Cars(5);
const car2 = new Cars(2);
const Newinfo1 = car1.infoCars.bind(car1, "left-hand");
Newinfo1();
const Newinfo2 = car2.infoCars.bind(car2, "right-hand");
Newinfo2();
