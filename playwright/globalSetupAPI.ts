import { request } from '@playwright/test';

async function globalSetup() {
  const requestContext = await request.newContext();
  await requestContext.post('http://localhost:3000/api/login', {
    form: {
      email: 'filip@example.com',
      password: 'i<3slovakia!'
    }
  });

  await requestContext.storageState({ path: 'storageState.json' });
  await requestContext.dispose();
}

export default globalSetup;