import { Car1 } from "./car1";
import { Car2 } from "./car2";

const honda = new Car1("Honda", "2.3 gas", 12000, 230);
const audi = new Car2("Audi", "1.9 diles", 15000, 200);

console.log(honda);
try {
    honda.setCost(-120);
} catch (err: any) {
    console.log(err);
}

console.log(audi);
try {
    audi.setMaxSpeed(0);
} catch (err: any) {
    console.log(err);
}
