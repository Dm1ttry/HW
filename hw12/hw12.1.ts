export class Cars0 {
    constructor(
        private Brand: string,
        private Type: string,
        protected Price: number,
        private MaxSpeed: number
    ) {
        Brand = this.Brand;
        Type = this.Type;
        Price = this.Price;
        MaxSpeed = this.MaxSpeed;
    }

    getInfo(): void {}

    setCost(Price: number): void {
        if (Price < 0) {
            throw new Error("Error Price not < 0");
        }
        if (Price === 0) {
            throw new Error("Error Price not = 0");
        } else {
            this.Price = Price;
        }
    }
}

const car00 = new Cars0("REno", "Gas 1.6", 1000, 120);
car00.setCost(500);
console.log(car00);
// Создайте класс родитель Car и два класса дочерних (любые 2 марки машины), разнесенных по разным модулям.
// Реализуйте несколько методов для этих классов
// В методах, где принимаются какието параметры, сделайте проверку через условный оператор,
//  который в случае неудачи будет выбрасывать исключение.
// Вызов модулей реализуйте через import, export
