import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly addToCartBackpack: Locator;
    readonly addToCartBike: Locator;
    readonly addToCartShirtBlack: Locator;
    readonly addToCartJacket: Locator;
    readonly addToCartOnesie: Locator;
    readonly addToCartShirtRed: Locator;
    readonly cartBadge: Locator;
    readonly removeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
        this.addToCartBackpack = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
        this.addToCartBike = page.locator('button[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.addToCartShirtBlack = page.locator('button[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.addToCartJacket = page.locator('button[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        this.addToCartOnesie = page.locator('button[data-test="add-to-cart-sauce-labs-onesie"]');
        this.addToCartShirtRed = page.locator('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
        this.cartBadge = page.locator('.shopping_cart_badge')
        this.removeButton = page.locator('.cart_button');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(user: string, pass: string) {
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }

    async addBackpack() {
        await this.addToCartBackpack.click();
    }

    async addBike() {
        await this.addToCartBike.click();
    }

    async addShirtBlack() {
        await this.addToCartShirtBlack.click();
    }

    async addJacket() {
        await this.addToCartJacket.click();
    }

    async addOnesie() {
        await this.addToCartOnesie.click();
    }

    async addShirtRed() {
        await this.addToCartShirtRed.click();
    }

    async removeItem() {
        await this.removeButton.first().click();
    }
}