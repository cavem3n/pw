import {type Page } from '@playwright/test';

export class CommonPageMethods{
    readonly page: Page;
    constructor(page: Page) {
    this.page = page;
    }

    async navigateApp(){
        await this.page.goto('https://www.saucedemo.com/');
    }
}