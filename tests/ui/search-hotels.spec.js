const { test, expect } = require('@playwright/test');

test.describe('Products Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
  });

  test('products page should load after login', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
  });

  test('products page should have items', async ({ page }) => {
    await expect(page.locator('.inventory_item')).not.toHaveCount(0);
  });

  test('products page title should be correct', async ({ page }) => {
    await expect(page.locator('.title')).toHaveText('Products');
  });

});