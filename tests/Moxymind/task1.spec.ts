import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('TC-1 Sauce Demo Logins', () => {

    test('Login - standard user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);
    });


    test('Login - locked out user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.errorMessage).toContainText('Sorry, this user has been locked out');
    });


    test('Login - problem user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('problem_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);
    });


    test('Login - performance glitch user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('performance_glitch_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);
    });


    test('Login - error user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('error_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);
    });

    test('Login - visual user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('visual_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);
    });
});

test.describe('TC-2 Adding and Removing items from the Cart', () => {

    test('Adding and Removing items from the Cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);

        await loginPage.addBackpack();
        await loginPage.addBike();
        await loginPage.addShirtBlack();
        await loginPage.addJacket();
        await loginPage.addOnesie();
        await loginPage.addShirtRed();
        await page.click('.shopping_cart_link');
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
        await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
        await expect(page.getByText('Sauce Labs Bolt T-Shirt').first()).toBeVisible();
        await expect(page.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
        await expect(page.getByText('Sauce Labs Onesie')).toBeVisible();
        await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();
        await loginPage.removeItem();
        await expect(page.getByText('Sauce Labs Backpack')).not.toBeVisible();
        await loginPage.removeItem();
        await expect(page.getByText('Sauce Labs Bike Light')).not.toBeVisible();
        await loginPage.removeItem();
        await expect(page.getByText('Sauce Labs Bolt T-Shirt')).not.toBeVisible();
        await loginPage.removeItem();
        await expect(page.getByText('Sauce Labs Fleece Jacket')).not.toBeVisible();
        await loginPage.removeItem();
        await expect(page.getByText('Sauce Labs Onesie')).not.toBeVisible();
        await loginPage.removeItem();
        await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).not.toBeVisible();
        await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();

    })
});

test.describe('TC-3 Complete Checkout', () => {

    test('Complete Checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await loginPage.addBackpack();
        await page.click('.shopping_cart_link');

        await page.click('[data-test="checkout"]');
        await page.fill('[data-test="firstName"]', 'Test');
        await page.fill('[data-test="lastName"]', 'User');
        await page.fill('[data-test="postalCode"]', '12345');
        await page.click('[data-test="continue"]');
        await page.click('[data-test="finish"]');

        const successHeader = page.locator('.complete-header');
        await expect(successHeader).toHaveText('Thank you for your order!');
    })
});

test.describe('TC-4 Login with delay', () => {

    test('Login with delay', async ({ page }) => {

        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await loginPage.login('performance_glitch_user', 'secret_sauce');

        const inventoryList = page.locator('.inventory_list');
        await expect(inventoryList).toBeVisible({ timeout: 10000 });
    })
});