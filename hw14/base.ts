import Rating from "./rate"

export default class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string,
        public category: string,
        public image: string,
        public rating : Rating
    ) {
        this.id = id,
        this.title = title,
        this.price = price,
        this.description = description,
        this.category = category,
        this.image = image
        this.rating = rating;
    }
}