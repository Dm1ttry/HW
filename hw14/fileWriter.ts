import Product from "./base";
import * as fs from "node:fs";

export default class FileWriter {
    static async writeData(prod: Product[], namefile : string)
    {fs.writeFile( `./hw14/result/${namefile} `,JSON.stringify(prod),(err) => {
        if (err) throw err;
        console.log("File add text");
        }
    );
}}