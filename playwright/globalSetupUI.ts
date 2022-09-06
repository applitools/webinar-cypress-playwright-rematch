import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from './models/LoginPage';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage({baseURL: "http://localhost:3000/"});
  const loginPage = new LoginPage(page);

  await loginPage.load();
  await loginPage.login('filip@example.com', 'i<3slovakia!');

  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;