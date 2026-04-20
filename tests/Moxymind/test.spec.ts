import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Sauce Demo Logins', () => {

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