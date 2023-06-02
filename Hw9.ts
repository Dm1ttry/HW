// Task 1

class Animal {
    NameAnimal: string;
    AgeAnimal: number;
    static animalType: string;

    constructor(Name: string, Type: string, Age: number) {
        this.NameAnimal = Name;
        Animal.animalType = Type;
        this.AgeAnimal = Age;
    }
    AnimalText() {
        console.log(
            `This is a ${Animal.animalType}. It's name is ${this.NameAnimal}`
        );
    }

    get getAge(): number {
        return this.AgeAnimal;
    }
}
const anim1 = new Animal("Cat", "Boris", 2);
anim1.AnimalText();
console.log(anim1.getAge);
