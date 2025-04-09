module.exports = {
    default: {
        require: [
            'steps/world.js', // Подключение world.js
            'steps/hooks.js', // Подключение hooks.js
            'steps/**/*.js'   // Подключение всех шагов
        ],
        format: ['html:cucumber-report.html'], // Генерация HTML-отчета
        parallel: 1, // Количество параллельных потоков
    },
};