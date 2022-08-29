import { test, expect } from '@playwright/test';

test('Trello homepage loads', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Trello/);

});
