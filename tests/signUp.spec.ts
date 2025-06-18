import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import {generateAndSaveTestUser, readTestUser} from '../utils/testdata/userdata';

const filePath = '.test-user.json';

   test('sign up with random data', async ({ page }) => {
       const signUpPage = new SignUpPage(page);

       const user = generateAndSaveTestUser(filePath);

       await signUpPage.open();
       await signUpPage.fillFirstName(user.randomFirstName);
       await signUpPage.fillLastName(user.randomLastName);
       await signUpPage.fillUserName(user.randomUserName);
       await signUpPage.fillEmail(user.randomEmail);
       await signUpPage.fillPassword(user.Password);
       await signUpPage.submitForm();

       await expect(page.locator('h2.gl-text-center')).toHaveText(`Welcome to GitLab,${user.randomFirstName}!`);
   });