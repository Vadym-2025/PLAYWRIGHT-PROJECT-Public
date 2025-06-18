import { faker } from '@faker-js/faker';
import { writeFileSync, readFileSync } from 'fs';

export function generateAndSaveTestUser(filePath: string) {
  const randomFirstName = faker.person.firstName();
  const randomLastName = faker.person.lastName();
  const randomUserName = `${randomFirstName}${randomLastName}`.toLowerCase().replace(/[^a-z0-9]/g, '');       
  const randomEmail = `${randomUserName}@example.com`;
  const Password = "Testing123";
       
  const userData = { randomFirstName, randomLastName, randomUserName, randomEmail, Password };

  writeFileSync(filePath, JSON.stringify(userData, null, 2));
  return userData;
}

export function readTestUser(filePath: string) {
  const raw = readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}