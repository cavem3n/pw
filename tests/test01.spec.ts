import { test, expect } from '@playwright/test';
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { LoginPageMethods } from '../pages/login-page/login-page.methods';
import { LoginPageData } from '../pages/login-page/login-page-data.ts';

const userCredentials = LoginPageData.credentials

test('Login', async ({ page }) => {
  const commonPageMethods = new CommonPageMethods(page)
  const loginPageMethods = new LoginPageMethods(page)

  await commonPageMethods.navigateApp()
  await loginPageMethods.insertUsername(userCredentials.usernames.standarUser)
  await loginPageMethods.insertPwd(userCredentials.password)
  await loginPageMethods.clickLogin()
});
