  import { test, expect } from '@playwright/test';
    import { LoginPage } from '../pages/LoginPage';
    import {generateAndSaveTestUser, readTestUser} from '../utils/testdata/userdata';

    const filePath = '.test-user.json';

    test('User can sign in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const user = readTestUser(filePath);

        await page.goto('https://gitlab.testautomate.me/users/sign_in');
        await loginPage.login(user.randomUserName, user.Password);

        await expect(page.locator('h2.gl-text-center')).toHaveText(`Welcome to GitLab,${user.randomFirstName}!`);
    });