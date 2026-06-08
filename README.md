# ✈️ Playwright Travel Automation

End-to-end test automation framework built with Playwright + JavaScript using Page Object Model design pattern.

## 🛠️ Tech Stack
- **Playwright** - Test automation framework
- **JavaScript** - Programming language
- **Page Object Model** - Design pattern
- **GitHub Actions** - CI/CD pipeline
- **Reqres.in** - API testing

## 📋 Test Coverage

| Module | Type | Scenarios |
|--------|------|-----------|
| Login | UI | Valid login, Invalid login, Page title |
| Products | UI | Page load, Items visible, Title check |
| API | API | Status 200, Response validation |

## 🤖 AI-Assisted Development
Test cases structured with **GitHub Copilot & Claude AI** assistance for optimal coverage and maintainability.

## 📁 Project Structure
playwright-travel-automation/
├── pages/              # Page Object Model classes
│   ├── LoginPage.js
│   └── SearchPage.js
├── tests/
│   ├── ui/             # UI test specs
│   └── api/            # API test specs
├── test-data/          # Test data JSON files
└── playwright.config.js

## ▶️ How to Run

### Install dependencies
```bash
npm install
npx playwright install chromium
```

### Run all tests
```bash
npx playwright test
```

### Run with report
```bash
npx playwright test
npx playwright show-report
```

## 👩‍💻 Author
**Suprabha Singh** | QA Engineer II
[GitHub](https://github.com/suprabhasingh8766-byte)