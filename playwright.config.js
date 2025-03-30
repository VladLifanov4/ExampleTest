const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests', // Папка с тестами
    timeout: 30000, // Таймаут для каждого теста (30 секунд)
    retries: 1, // Количество повторов при падении теста
    use: {
        baseURL: 'https://example.com', // Базовый URL для тестов
        headless: true, // Запуск тестов в безголовом режиме
        viewport: { width: 1280, height: 720 }, // Размер окна браузера
        ignoreHTTPSErrors: true, // Игнорировать ошибки HTTPS
        video: 'on-first-retry', // Запись видео при первом падении
        screenshot: 'only-on-failure', // Скриншоты только при падении теста
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        }
    ],
    reporter: [['html', { outputFolder: 'playwright-report' }]], // Генерация HTML-отчета
});