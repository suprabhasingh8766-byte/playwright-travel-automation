const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const userData = require('../../test-data/users.json');

test.describe('Login Tests', () => {

  test('valid login should redirect to inventory', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userData.validUser.email, userData.validUser.password);
    await expect(page).toHaveURL(/inventory/);
  });

  test('invalid login should show error message', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userData.invalidUser.email, userData.invalidUser.password);
    await expect(loginPage.errorMsg).toBeVisible();
  });

  test('login page should have correct title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveTitle(/Swag Labs/i);
  });

});