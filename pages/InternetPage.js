class InternetPage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async setCookie(name, value) {
        await this.page.context().addCookies([{
            name: name,
            value: value,
            domain: new URL(this.page.url()).hostname,
            path: '/',
        }]);
    }

    async deleteCookies(name) {
        const cookies = await this.page.context().cookies();
        const cookieToDelete = cookies.find(cookie => cookie.name === name);
        if (cookieToDelete) {
            await this.page.context().clearCookies([cookieToDelete]);
        }
    }

    async isCookiesExists(name, value) {
        const cookies = await this.page.context().cookies();
        return cookies.some(cookie => cookie.name === name && cookie.value === value);
    }

    async isCookiesNotExist(name) {
        const cookies = await this.page.context().cookies();
        return !cookies.some(cookie => cookie.name === name);
    }
}

module.exports = InternetPage;