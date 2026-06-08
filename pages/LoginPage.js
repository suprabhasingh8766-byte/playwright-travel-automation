class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginBtn = page.locator('#login-button');
    this.errorMsg = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.emailInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };