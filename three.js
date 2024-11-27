const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");
(async function firstTest() {
    let driver;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get('https://www.rambler.ru/');
        let title = await driver.getTitle();
        assert.equal("Рамблер/новости, почта и поиск — медийный портал: новости России и мира, электронная почта, погода, развлекательные и коммуникационные сервисы. Новости сегодня и сейчас", title);
        await driver.manage().setTimeouts({implicit:500})     // перед проведением теста, раскройте браузер для правильной работы
        let weather = await driver.findElement(By.className("rc__5PvjK"));
        await weather.click();     // если какой-либо из тестов не сработал, вините rambler, у них две версии сайта, что открываются совершенно случайно
        

    } catch (e) {
        console.log(e)
    } finally {
       // await driver.quit();
    }
}())


