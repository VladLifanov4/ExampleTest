const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://example.com/login');
    });

    test('User can log in', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('testuser', 'password123');
        await expect(page).toHaveURL('https://example.com/dashboard');
    });
});