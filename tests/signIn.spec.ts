  import { test, expect } from '@playwright/test';
    import { LoginPage } from '../pages/LoginPage';
    import { HomePage } from '../pages/HomePage';

    test('User can sign in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await page.goto('https://gitlab.testautomate.me/users/sign_in');
        await loginPage.login('someusername', 'some password');
        await homePage.verifyDashboardTitle();

        await expect(page.locator('[data-qa-selector="welcome_title_content"]')).toBeVisible();
    });