import { Page } from 'playwright'
import { ProductsPageElements } from './products-page.elements.ts'
import { Logger } from '../../support/logger'
import { expect } from '@playwright/test'
export class ProductsPageMethods {
    private page: Page
    private productsPageElements: ProductsPageElements

    constructor(page: Page) {
        this.page = page
        this.productsPageElements = new ProductsPageElements(page)
    }

    async clickOnAddToCart(productName: string) {
        await Logger.logStep(`Click on Add To Cart button corresponding to "${productName}"`)
        await this.productsPageElements.addCartButton(productName).click()
    }

    async clickOnCartIcon() {
        await Logger.logStep('Click on Cart icon')
        await this.productsPageElements.icons.cart.click();
    }

    async verifyProductsPageIsDisplayed() {
        await Logger.logVerification('Verify that the Products page is shown')
        const elementsCount = await this.productsPageElements.otherElements.pageTitle.count()
        expect(elementsCount).toEqual(1)
    }
}