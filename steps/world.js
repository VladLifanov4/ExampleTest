import { setWorldConstructor } from '@cucumber/cucumber';
import { chromium } from 'playwright';

class CustomWorld {
    async init() {
        this.browser = await chromium.launch({ headless: true }); // Запуск браузера
        this.context = await this.browser.newContext(); // Создание нового контекста
        this.page = await this.context.newPage(); // Создание новой страницы
    }

    async close() {
        await this.page.close(); // Закрытие страницы
        await this.context.close(); // Закрытие контекста
        await this.browser.close(); // Закрытие браузера
    }
}

setWorldConstructor(CustomWorld);