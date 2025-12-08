📦 Project Setup
1. Clone the repository (use this commands in terminal)
```
   git clone https://github.com/RomankoVladyslav/caps_task.git
   cd caps_task
```
   

2. Install dependencies
```
   npm install
```
3. Install Playwright browsers
```
   npx playwright install
```

(Optional) Install system dependencies for WebKit:
```
npx playwright install-deps
```

▶️ Running Tests

You have two predefined npm scripts for running tests:

Run ALL tests

Runs the entire Playwright test suite.
```
npm run allTests
```

Equivalent to:
```
npx playwright test
```
Run a single test

Runs only one specific test file (buyFormStepProgressCheck.test.ts its example, you can change name to specific test).
```
npm run oneTest
```

Equivalent to:
```
npx playwright test buyFormStepProgressCheck.test
```

You can change headless mode in main configure file
```
headless: false
```
```
headless: true
```
🤖 CI/CD Integration

This project can be integrated easily with GitHub Actions, Jenkins, or GitLab CI using:
```
npx playwright install --with-deps
npm run allTests
```