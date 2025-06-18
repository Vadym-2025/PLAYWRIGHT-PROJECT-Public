import { test, expect } from '@playwright/test';
import { createGitLabUser } from '../utils/api/apihelper';

test('Create user via GitLab API using helper', async () => {
  const user = await createGitLabUser();

  console.log('✅ Created user:', user);


});