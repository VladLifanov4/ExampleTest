const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000,
    retries: 1,
    use: {
        baseURL: 'https://the-internet.herokuapp.com/',
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'on-first-retry',
    },
    reporter: [
        ['list'], // Стандартный репортер
        ['allure-playwright'], // Добавляем Allure репортер
    ],
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        }
    ],
});