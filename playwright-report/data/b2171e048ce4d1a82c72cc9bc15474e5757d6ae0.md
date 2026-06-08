# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\hotels-api.spec.js >> API Tests >> GET saucedemo homepage should return 200
- Location: tests\api\hotels-api.spec.js:5:3

# Error details

```
Error: apiRequestContext.get: unable to get local issuer certificate
Call log:
  - → GET https://www.saucedemo.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/148.0.7778.96 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe('API Tests', () => {
  4  | 
  5  |   test('GET saucedemo homepage should return 200', async ({ request }) => {
> 6  |     const response = await request.get('https://www.saucedemo.com');
     |                                    ^ Error: apiRequestContext.get: unable to get local issuer certificate
  7  |     expect(response.status()).toBe(200);
  8  |   });
  9  | 
  10 |   test('response should have content-type html', async ({ request }) => {
  11 |     const response = await request.get('https://www.saucedemo.com');
  12 |     const contentType = response.headers()['content-type'];
  13 |     expect(contentType).toContain('text/html');
  14 |   });
  15 | 
  16 |   test('GET inventory page should return 200', async ({ request }) => {
  17 |     const response = await request.get('https://www.saucedemo.com/inventory.html');
  18 |     expect(response.status()).toBe(200);
  19 |   });
  20 | 
  21 | });
```