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

    async addAllItemsToCart() {
        const displayedCards = await this.productsPageElements.allItems.allCards.count()
        await Logger.logStep(`Click on Add item on all "${displayedCards}" items`)
            for(let i=1; i<=displayedCards;i++) {
                await this.page.locator('div.inventory_item:nth-child('+i+') > div:nth-child(2) .btn').click()
    }
        await Logger.logVerification(`Verify cart number is updated with ${displayedCards} items`)
        const updatedCards = displayedCards.toString();
        const verifyBadge = await this.productsPageElements.icons.cartBadge.first().textContent()
        expect(updatedCards).toEqual(verifyBadge)
    }
}