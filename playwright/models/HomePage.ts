import { Page, Locator } from '@playwright/test';

export class HomePage {
    page: Page;
    board: Locator;

    constructor(page: Page) {
        this.page = page;
        this.board = page.locator("div.board h1");
    }

    async load() {
        await this.page.goto('/');
    }

    async boardNames(): Promise<string[]> {
        await this.board.nth(0).waitFor();
        return await this.board.allTextContents();
    }
}