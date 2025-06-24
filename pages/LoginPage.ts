import { Page } from '@playwright/test';

 export class LoginPage {
        constructor(public page: Page) {}

    readonly usernameInput = this.page.locator('[data-qa-selector="login_field"]');
    readonly passwordInput = this.page.locator('[data-qa-selector="password_field"]');
    readonly signinButton = this.page.locator('[data-qa-selector="sign_in_button"]');

    async open() {
    await this.page.goto('https://gitlab.testautomate.me/users/sign_in');
       }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signinButton.click();
    }
}

