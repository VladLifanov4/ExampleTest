const { Before, After, Status } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

Before(async function () {
    await this.init(); // Инициализация браузера, контекста и страницы
});

After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        const screenshotPath = path.join('allure-results', `screenshot-${Date.now()}.png`);
        await this.page.screenshot({ path: screenshotPath });
        // Добавляем скриншот в отчет Allure
        fs.writeFileSync(
            path.join('allure-results', 'attachments', `screenshot-${Date.now()}.png`),
            fs.readFileSync(screenshotPath)
        );
    }
    await this.close(); // Закрытие браузера, контекста и страницы
});