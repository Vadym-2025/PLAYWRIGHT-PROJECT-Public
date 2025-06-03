import {test, expect} from '@playwright/test'

test('Login with existing user', async ({ page })=>{
    await page.goto('https://gitlab.testautomate.me/users/sign_in')
    
    await page.locator('[data-qa-selector="login_field"]').fill('someusername')
    await page.locator('[data-qa-selector="password_field"]').fill('some password')
    await page.locator('[data-qa-selector="sign_in_button"]').click()

    await expect(page.locator('[data-qa-selector="welcome_title_content"]')).toBeVisible()
})