const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { baseURL } = require('../utils/config.js');
const InternetPage = require('../pages/InternetPage.js');

let page;
let internetPage;

Given('I navigate to the base URL', async function () {
    const { page: testPage } = this; // Получаем `page` из контекста Cucumber
    page = testPage;
    internetPage = new InternetPage(page);
    await internetPage.navigateTo(baseURL);
});

Given('I set a cookie with name {string} and value {string}', async function (name, value) {
    await internetPage.setCookie(name, value);
});

When('I check if the cookie with name {string} and value {string} exists', async function (name, value) {
    const cookieExists = await internetPage.isCookiesExists(name, value);
    expect(cookieExists).toBe(true);
});

Then('the cookie should exist', async function () {
    // Проверка уже выполнена в предыдущем шаге
});

When('I delete the cookie with name {string}', async function (name) {
    await internetPage.deleteCookies(name);
});

Then('the cookie with name {string} should not exist', async function (name) {
    const cookieNotExists = await internetPage.isCookiesNotExist(name);
    expect(cookieNotExists).toBe(true);
});