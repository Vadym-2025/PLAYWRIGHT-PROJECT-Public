import { test, expect } from '@playwright/test';
import { createGitLabUser } from '../utils/api/apihelper';

test('Create user via GitLab API using helper', async () => {
  const user = await createGitLabUser();

  console.log('✅ Created user:', user);
  
  // Example: navigate and log in with the user
  // await page.goto('https://gitlab.example.com/users/sign_in');
  // await page.fill('input[name="user[login]"]', user.email);
  // await page.fill('input[name="user[password]"]', user.password);
  // await page.click('input[name="commit"]');
  // await expect(page.locator('text=Dashboard')).toBeVisible();
});