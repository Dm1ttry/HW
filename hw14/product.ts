import Product from "./base";
import Rating from "./rate";

export default class Products {
    private product: Product[];

    constructor() {
        this.product = [];
    }

    async Initialize() {
        const date = await fetch("https://fakestoreapi.com/products/");
        const response = await date.json();
        for (let resp of response) {
            const rating = new Rating(resp.rating.rate, resp.rating.count);
            const product: Product = new Product(
                resp.id,
                resp.title,
                resp.price,
                resp.description,
                resp.category,
                resp.image,
                rating
            );
            this.product.push(product);
        }
    }

    get Product() {
        return this.product;
    }

    // 1.находит все товары в ценовом диапазоне от до
    srearchPrice(start: number, end: number) {
        return this.product.filter(
            (valprice) => start >= valprice.price || valprice.price <= end
        );
    }

    // 2.находит товар по заданному title
    srearchTitle(titletxt: string) {
        return this.product.filter((text) => text.title === titletxt);
    }
    // 3.находит все товары, которые содержат заданную подстроку в description
    srearchDescription(text: string) {
        return this.product.filter((texts) => texts.description.includes(text));
    }
    // 4.сортирует все товары по убыванию rate
    srearchRate() {
        return this.product.sort(
            (rate1, rate2) => rate2.rating.rate - rate1.rating.rate
        );
    }
    // 5.находит все товары с rate выше либо равным заданному, сортирует результаты по возрастанию количества оценок
    srearchRateUser(rateuser: number) {
        return this.product
            .filter((val) => val.rating.rate >= rateuser)
            .sort(
                (count1, count2) => count2.rating.count - count1.rating.count
            );
    }
    // 6.группирует все товары по категории, сортирует товары внутри групп по цене
    // gtoupingProduct(){
    //     return this.product
    //         .reduce((prod1, prod2) => prod1.category || prod2.category)
    // .sort((price1, price2) => price1.price - price2.price);
    // }
    // 7.находит все товары, с расширением image НЕ являющимся одним из списка: jpg, png, jpeg
    srearchPhoto() {
        return this.product.filter(
            (prod) =>
                prod.image.endsWith(".png") &&
                prod.image.endsWith(".jpg") &&
                prod.image.endsWith(".jpeg") &&
                false
        );
    }
}