import { Page } from 'playwright'
import { ProductsPageElements } from './products-page.elements.ts'
import { Logger } from '../../support/logger'
import { expect } from '@playwright/test'
import { CartPageElements } from '../cart-page/cart-page.elements.ts'

export class ProductsPageMethods {
    private page: Page
    private productsPageElements: ProductsPageElements
    private cartPageElements: CartPageElements

    constructor(page: Page) {
        this.page = page
        this.productsPageElements = new ProductsPageElements(page)
        this.cartPageElements = new CartPageElements(page)
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
        const displayedCards = await this.productsPageElements.allItemCards.allItemList.count()
        await Logger.logStep(`Click on Add item on all "${displayedCards}" items`)
            for(let i=1; i<=displayedCards;i++) {
                await this.page.locator('div.inventory_item:nth-child('+i+') > div:nth-child(2) .btn').click()
    }
        await Logger.logVerification(`Verify cart number is updated with ${displayedCards} items`)
        const updatedCards = displayedCards.toString();
        const verifyBadge = await this.productsPageElements.icons.cartBadge.first().textContent()
        expect(updatedCards).toEqual(verifyBadge)
    }

    async addEachItemToCart(){
        const displayedCards = await this.productsPageElements.allItemCards.allItemList.count()
        for(let i=1; i<=displayedCards;i++) {
                await this.page.locator('div.inventory_item:nth-child('+i+') > div:nth-child(2) .btn').click()
                await Logger.logVerification(`Verify cart number is updated with added item`)
                const verifyBadge = await this.productsPageElements.icons.cartBadge.first().innerText()
                const num = Number(verifyBadge)
                expect(i).toEqual(num)
                await this.productsPageElements.icons.cart.click()
                await this.cartPageElements.buttons.continueShopping.click()
        }
    }

        async addRandomItemToCart() {

        //Count All Items
        const displayedCards = await this.productsPageElements.allItemCards.allItemList.count()

        //Select one of the random buttons
        const nRan = Math.floor(Math.random()*displayedCards)+1

        await Logger.logVerification(`Add item No. ${nRan}`)
        
        //Store item text in string and click button
        const selectedRandomItemTitle = this.productsPageElements.getRandomItemTitle(nRan).innerText()
        await this.productsPageElements.getRandomItemButton(nRan).click()

        //Verify Badge to be 1
        await Logger.logVerification(`Verify cart number is updated with added item`)
        const verifyBadge = await this.productsPageElements.icons.cartBadge.first().innerText()
        expect("1").toEqual(verifyBadge)

        //Return selected button title
        return selectedRandomItemTitle
    }
}