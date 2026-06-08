const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {

  test('GET saucedemo homepage should return 200', async ({ request }) => {
    const response = await request.get('https://www.saucedemo.com');
    expect(response.status()).toBe(200);
  });

  test('response should have content-type html', async ({ request }) => {
    const response = await request.get('https://www.saucedemo.com');
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('text/html');
  });

  test('GET inventory page should return 200', async ({ request }) => {
    const response = await request.get('https://www.saucedemo.com/inventory.html');
    expect(response.status()).toBe(200);
  });

});