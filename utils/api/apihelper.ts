import { request, expect, APIRequestContext } from '@playwright/test';

export async function createGitLabUser() {
  const apiContext: APIRequestContext = await request.newContext({
    baseURL: 'https://gitlab.testautomate.me/api/v4',
    extraHTTPHeaders: {
      Authorization: 'Bearer FKzy_BpV5wAybKf7Z9JX',
      'Content-Type': 'application/json',
    },
  });

  const response = await apiContext.post('/users', {
    data: {
      email: 'testuserfirstname_testuserlastname3@example.com',
      username: 'testuserfirstname3',
      name: 'TestUserFirstName3',
      password: 'superadmin',
      skip_confirmation: true
    },
  });

  expect(response.status()).toBe(201); // Optional

  const user = await response.json();
  console.log('User created:', user);
  return user;
}