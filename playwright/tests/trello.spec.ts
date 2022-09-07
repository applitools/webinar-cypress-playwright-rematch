import { test as base, expect } from '@playwright/test';
import { HomePage } from '../models/HomePage';


const test = base.extend<{ homePage: HomePage }>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
});


test('Trello homepage loads', async ({ page }) => {
  await page.goto('/');

  // Expect a title to contain a substring.
  await expect(page).toHaveTitle(/Trello/);

  // Click the board named "Colors"
  await page.locator('text=Colors').click();
});


test('Trello home page shows boards', async ({ homePage }) => {
  await homePage.load();
  const boardNames = await homePage.boardNames();
  expect(boardNames).toEqual(['Space program', 'Colors']);
});