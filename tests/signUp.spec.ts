import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';
import {generateAndSaveTestUser, readTestUser} from '../utils/testdata/userdata';

const filePath = '.test-user.json';

test.describe.serial('Sign up and Sign in flow', () => {

   test('sign up with random data', async ({ page }) => {
       const signUpPage = new SignUpPage(page);

       const user = generateAndSaveTestUser(filePath);

       await signUpPage.open();
       await signUpPage.signUp(user.randomFirstName, user.randomLastName, user.randomUserName, user.randomEmail, user.Password);

       await expect(page.locator('h2.gl-text-center')).toHaveText(`Welcome to GitLab,${user.randomFirstName}!`);
   });

    test('User can sign in successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        
        const user = readTestUser(filePath);

        await loginPage.open();
        await loginPage.login(user.randomUserName, user.Password);

        await expect(page.locator('h2.gl-text-center')).toHaveText(`Welcome to GitLab,${user.randomFirstName}!`);
    });

});