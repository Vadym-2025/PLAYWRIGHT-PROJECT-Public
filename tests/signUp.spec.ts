import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { faker } from '@faker-js/faker';

   test('sign up with random data', async ({ page }) => {
       const signUpPage = new SignUpPage(page);

       const randomFirstName = faker.person.firstName();
       const randomLastName = faker.person.lastName();
       const randomUserName = `${randomFirstName}${randomLastName}`.toLowerCase().replace(/[^a-z0-9]/g, '');       
       const randomEmail = `${randomUserName}@example.com`;
       const Password = "ThisIsJustForTesting123!";
       
      // console.log('Generated username:', randomFirstName); // debug
      // console.log('Username:', randomUserName);
      // console.log(randomEmail); // debug 
     
       await signUpPage.open();
       await signUpPage.fillFirstName(randomFirstName);
       await signUpPage.fillLastName(randomLastName);
       await signUpPage.fillUserName(randomUserName);
       await signUpPage.fillEmail(randomEmail);
       await signUpPage.fillPassword(Password);
       await signUpPage.submitForm();

       await expect (page.locator('h2.gl-text-center')).toBeVisible();
       await expect(page.locator('h2.gl-text-center')).toHaveText(`Welcome to GitLab,${randomFirstName}!`);
   });