Moxymind Technical Task - Frontend Automation

## Project Overview
Automated test suite for [Sauce Demo](https://www.saucedemo.com/) using **Playwright** and **TypeScript**.

## Essential Test Cases Included:
1. **Successful Login**: Critical for app access.
2. **Locked Out User**: Validates security and error handling.
3. **Add to Cart**: Core functionality for e-commerce.
4. **Complete Checkout**: Ensures the revenue-generating path works end-to-end.
5. **Performance Glitch**: Validates UI stability under slow response times.

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## How to Run Locally
1. **Clone the repo:**
   `git clone <your-repo-link>`
2. **Install dependencies:**
   `npm install`
3. **Install Playwright Browsers:**
   `npx playwright install`
4. **Run tests in Headless mode:**
   `npx playwright test`
5. **Run tests in Headed mode (UI):**
   `npx playwright test --headed`

// Initialize a new Playwright project
npm init playwright@latest

// run tests
npx playwright test

//Generate report
npx playwright show-report