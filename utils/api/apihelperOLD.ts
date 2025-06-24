// import { request, APIRequestContext } from '@playwright/test';
// import { generateAndSaveTestUser, readTestUser } from '../testdata/userdata';
// import { writeFileSync, readFileSync } from 'fs';


// const BASE_URL = 'https://gitlab.testautomate.me';
// const BEARER_TOKEN = 'FKzy_BpV5wAybKf7Z9JX';
// const filePath = '.test-user.json';
// const user = generateAndSaveTestUser(filePath);

// export async function CreateAPIUser(filePath: string) {
//   const apiContext: APIRequestContext = await request.newContext({
//     baseURL: `https://gitlab.testautomate.me/api/v4`,
//     extraHTTPHeaders: {
//       Authorization: `Bearer ${BEARER_TOKEN}`,
//     },
//   });
// console.log('Generated username:', user.randomFirstName); // debug
// console.log('Username:', user.randomUserName);
// console.log('Username:', user.randomEmail);
// console.log('Username:', user.Password);

//   const response = await apiContext.post('/users', {
//   data: {
//   email: "testuserfirstname_testuserlastname2@example.com",
//   username: "testuserfirstname2",
//   name: "TestUserFirstName2",
//   password: "Testing123",
//   skip_confirmation: true
// },
// });

// if (!response.ok()) {
//   const errorText = await response.text();
//   throw new Error(`Failed to create user: ${response.status()} - ${errorText}`);
// }

// const responseBody = await response.json()

// }