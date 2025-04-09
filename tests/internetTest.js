import { test, expect } from '@playwright/test';
import InternetPage from '../pages/InternetPage';
import { baseURL } from '../utils/config';
import * as allure from "allure-js-commons";

test.describe('Internet Tests with Allure', () => {
    let internetPage;

    test.beforeEach(async ({ page }) => {
        await allure.step('Navigate to base URL and set cookies', async () => {
            internetPage = new InternetPage(page);
            await internetPage.navigateTo(baseURL);
            await internetPage.setCookie('testKey', 'testValue');
        });
    });

    test('Cookies adding check', async () => {
        await allure.step('Check if cookie exists', async () => {
            const cookieExists = await internetPage.isCookiesExists('testKey', 'testValue');
            expect(cookieExists).toBe(true);
        });

        await allure.step('Delete cookie and verify it is removed', async () => {
            await internetPage.deleteCookies('testKey');
            const cookieNotExists = await internetPage.isCookiesNotExists('testKey');
            expect(cookieNotExists).toBe(true);
        });
    });
});