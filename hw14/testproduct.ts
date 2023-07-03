import Products from "./Product";
import FileWriter from "./FileWriter";

const product1 = new Products();
product1.Initialize().then(() =>
    FileWriter.writeData(product1.srearchPrice(0, 20), "result_1.json")
);
product1.Initialize().then(() =>
    FileWriter.writeData(product1.srearchTitle("Opna Women's Short Sleeve Moisture"),"result_2.json")
);
product1.Initialize().then(() =>
    FileWriter.writeData(product1.srearchDescription("Lightweight perfet"),"result_3.json")
);
product1.Initialize().then(() => 
    FileWriter.writeData(product1.srearchRate(), "result_4.json")
);
product1.Initialize().then(() =>
    FileWriter.writeData(product1.srearchRateUser(4), "result_5.json")
);
product1.Initialize().then(() =>
    FileWriter.writeData(product1.groupingProduct("men's clothing"),"result_6.json")
);
product1.Initialize().then(() =>
    FileWriter.writeData(product1.srearchPhoto(), "result_7.json"));
product1.Initialize().then(() =>
    FileWriter.writeData(product1.DescriptionFix(), "result_8.json")
);
product1.Initialize().then(() =>
    FileWriter.writeData(product1.DiscountProducts("electronics", 15),"result_9.json")
);
product1.Initialize().then(() =>
    FileWriter.writeData(product1.PriceRounding(), "result_10.json")
);
// product1.Initialize().then(() =>
//     FileWriter.writeData(product1.TotalCoutn(), "result_11.json")
// );
product1.Initialize().then(() => console.log(JSON.stringify(product1.TotalCoutn())));
