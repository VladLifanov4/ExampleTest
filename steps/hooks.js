import { Before, After } from '@cucumber/cucumber';

Before(async function () {
    await this.init(); // Инициализация браузера, контекста и страницы
});

After(async function () {
    await this.close(); // Закрытие браузера, контекста и страницы
});