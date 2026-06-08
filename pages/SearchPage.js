class SearchPage {
  constructor(page) {
    this.page = page;
    this.hotelTab = page.locator('a[href*="hotels"]');
    this.searchBtn = page.locator('button.search-btn');
  }

  async goto() {
    await this.page.goto('/');
  }

  async searchHotel(location) {
    await this.hotelTab.click();
    await this.page.locator('#select2-city-container').click();
    await this.page.locator('.select2-search__field').fill(location);
    await this.page.locator('.select2-results__option').first().click();
    await this.searchBtn.click();
  }
}

module.exports = { SearchPage };