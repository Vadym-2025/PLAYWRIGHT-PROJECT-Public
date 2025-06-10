import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SignUpPage } from '../pages/SignUpPage';
import { faker } from '@faker-js/faker';

   test('sign up with random data', async ({ page }) => {
       const signUpPage = new SignUpPage(page);

       const randomFirstName = faker.person.firstName();
       const randomLastName = faker.person.lastName();
       const randomUserName = faker.internet.username();
       const randomEmail = faker.internet.email();
       const randomPassword = faker.internet.password();
     
       await page.goto('https://gitlab.testautomate.me/users/sign_in');
       await signUpPage.fillFirstName(randomFirstName);
       await signUpPage.fillLastName(randomLastName);
       await signUpPage.fillUserName(randomUserName);
       await signUpPage.fillEmail(randomEmail);
       await signUpPage.fillPassword(randomPassword);
       await signUpPage.submitForm();

        await expect(page.locator('[data-qa-selector="welcome_title_content"]')).toBeVisible 
   });