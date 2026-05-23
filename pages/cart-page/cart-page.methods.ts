import { Page } from 'playwright'
import { CartPageElements } from './cart-page.elements.ts'
import { Logger } from '../../support/logger'
import { expect } from '@playwright/test'
import { ProductsPageMethods } from '../products-page/products-page.methods.ts'

export class CartPageMethods {
    private page: Page
    private cartPageElements: CartPageElements
    private productPageMethods: ProductsPageMethods

    constructor(page: Page) {
        this.page = page
        this.cartPageElements = new CartPageElements(page)
        this.productPageMethods = new ProductsPageMethods(page)
    }

    async clickOnContinueShoppingButton() {
        await Logger.logStep('Click on Continue Shopping button')
        await this.cartPageElements.buttons.continueShopping.click()
    }

    async clickOnCheckoutButton() {
        await Logger.logStep('Click on Checkout button')
        await this.cartPageElements.buttons.checkout.click();
    }

    async clickOnRemoveButton(productName: string) {
        await Logger.logStep(`Click on Remove button for ${productName}`)
        await this.cartPageElements.removeButton(productName).click()
    }

    async verifyProductIsDisplayed(productName: string) {
        await Logger.logVerification(`The product "${productName}" should be shown`)
        const productsCount = await this.cartPageElements.removeButton(productName).count()
        expect(productsCount).toEqual(1)
    }

    async verifyProductIsNotDisplayed(productName: string) {
        await Logger.logVerification(`The product "${productName}" should not be shown`)
        const productsCount = await this.cartPageElements.removeButton(productName).count()
        expect(productsCount).toEqual(0)
    }

    async verifyRandomProductIsDisplayed() {
        return await this.cartPageElements.cartItemList.addedItemTitle.textContent()
    }
}