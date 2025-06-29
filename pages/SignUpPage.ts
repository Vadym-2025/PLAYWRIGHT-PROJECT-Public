import { expect, type Locator, type Page } from '@playwright/test';

   export class SignUpPage {
       readonly page: Page;
       readonly firstNameField: Locator;
       readonly lastNameField: Locator;
       readonly userNameField: Locator;
       readonly emailField: Locator;
       readonly passwordField: Locator;
       readonly submitButton: Locator;

       constructor(page: Page) {
           this.page = page;
           this.firstNameField = page.locator('#new_user_first_name');
           this.lastNameField = page.locator('#new_user_last_name');
           this.userNameField = page.locator('#new_user_username');
           this.emailField = page.locator('#new_user_email');
           this.passwordField = page.locator('#new_user_password');
           this.submitButton = page.locator('input[type="submit"]');
       }

       async open() {
    await this.page.goto('https://gitlab.testautomate.me/users/sign_up');
       }
       
       async signUp(firstName: string, lastName: string, userName: string, email: string, password: string) {
           await this.firstNameField.fill(firstName);
           await this.lastNameField.fill(lastName);
           await this.userNameField.fill(userName);
           await this.emailField.fill(email);
           await this.passwordField.fill(password);
           await this.submitButton.click();
       }
   }

//

// export class SignUpPage {
//   constructor(public page: Page) {}

//   readonly firstnameInput = this.page.locator('#new_user_first_name');
//   readonly lastnameInput = this.page.locator('#new_user_last_name');
//   readonly usernameInput = this.page.locator('#new_user_username');
//   readonly emailInput = this.page.locator('#new_user_email');
//   readonly passwordInput = this.page.locator('#new_user_password');
//   readonly signinButton = this.page.locator('button[type="submit"]');

//   async signUp(firstname: string, lastname: string, username: string, email: string, password: string) {

//     await this.firstnameInput.fill(firstname);
//     await this.usernameInput.fill(lastname);
//     await this.usernameInput.fill(username);
//     await this.emailInput.fill(email);
//     await this.passwordInput.fill(password);
//     await this.signinButton.click();
//   }
// }