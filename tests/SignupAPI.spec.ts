import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {generateAndSaveTestUser, readTestUser} from '../utils/testdata/userdata';

const filePath = '.test-user.json';

test('Create user via GitLab API', async ({ request }) => {
const user = generateAndSaveTestUser(filePath);
const response = await request.post('https://gitlab.testautomate.me/api/v4/users', {
  headers: {
    Authorization: 'Bearer FKzy_BpV5wAybKf7Z9JX',
  },
  data: {
    name: user.randomFirstName,
    username: user.randomUserName,
    email: user.randomEmail,
    password: user.Password,
    skip_confirmation: true,
  }
});

if (!response.ok()) {
  const errorText = await response.text();
  throw new Error(`Failed to create user: ${response.status()} - ${errorText}`);
}

    expect(response.status()).toBe(201);
});

test('User can sign in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const user = readTestUser(filePath);

        await loginPage.open();
        await loginPage.login(user.randomUserName, user.Password);

        await expect(page.locator('.gl-font-size-h1')).toHaveText(`Welcome to GitLab`);
    });