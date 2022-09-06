import { Page, Locator } from '@playwright/test';

export class LoginPage {
    page: Page;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("[data-cy=login-email]");
        this.passwordInput = page.locator("[data-cy=login-password]");
        this.loginButton = page.locator("[data-cy=login-submit]");
    }

    async load() {
        await this.page.goto("/login");
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}