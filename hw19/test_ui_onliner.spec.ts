import { Builder, By, WebDriver } from "selenium-webdriver";

describe("Test suite onliner.by", ()=>{
    test("Test Test find laptop of features", async () => {
        let driver : WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.onliner.by/");
        const laptops = await driver.findElement(By.xpath("//span[contains(text(), 'Ноутбуки')]"));
        await laptops.click();
        const laptop = await driver.findElement(By.xpath("//span[contains(text(), 'Ноутбук Tecno Megabook T1 4895180791734')]"));
        await laptop.click();
        expect(await driver.findElement(By.xpath("//input[@name='Intel Core i3 1005G1']")));
        await driver.sleep(1000);
        await driver.quit();
    });

    test("Test prank of phone", async () => {
        let driver : WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.onliner.by/");
        const laptops = await driver.findElement(By.xpath("//span[contains(text(), 'Ноутбуки')]"));
        await laptops.click();
        expect(await driver.findElement(By.xpath("//a[contains (@class, 'raffle-banner')]")));
        await driver.sleep(1000);
        await driver.quit();
    })

    test("Test sign in", async () => {
        let driver : WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.onliner.by/");
        const signin = await driver.findElement(By.xpath("//div[contains(text(), 'Вход')]"));
        await signin.click();
        const NilOrEmail = await driver.findElement(By.xpath("//input[@placeholder= 'Ник или e-mail']"))
        .sendKeys("user12@gmail.com");
        const Password = await driver.findElement(By.xpath("//input[@type= 'password']"))
        .sendKeys("password1234");
        const SinginBotton = await driver.findElement(By.xpath("//button[contains(@class, 'auth-button')] "))
        await SinginBotton.click();
        expect(await SinginBotton.isEnabled()).toBeTruthy();
        await driver.sleep(1000);
        await driver.quit()
    })

    test("Test tv add basket", async () => {
        let driver : WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://tech.onliner.by/2023/07/11/kakoj-televizor-lg-kupit-v-2023-godu-obzor-novoj-linejki");
        const tv = await driver.findElement(By.xpath('//a[contains(text(), "LG OLED G3")]'))
        .click();
        const addtv = await driver.findElement(By.xpath('//a[contains(text(), "В корзину" )][@data-shop-id="20236"]'))
        .click();
        await driver.sleep(1000);
        await driver.get("https://cart.onliner.by/");
        expect(await driver.findElement(By.xpath('//a[contains(text(), "OLED телевизор LG G3 OLED55G3RLA")]')));
        await driver.quit();
    })

    test("Test satia title", async () => {
        let driver : WebDriver = await new Builder().forBrowser("chrome").build();
        await driver.get("https://www.onliner.by/");
        const statia = await driver.findElement(By.xpath('//span[contains(text(),"Покупала квартиру из-за этого вида, а теперь его нет")]'))
        .click();
        expect(await driver.getTitle()).toBe("Покупала квартиру из-за этого вида, а теперь его нет");
        await driver.sleep(6000);
        await driver.quit();
    })
});