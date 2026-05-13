import { Page } from 'playwright'

export class ProductsPageElements {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    get icons() {
        return {
            cart: this.page.locator('.shopping_cart_link'),
            cartBadge: this.page.locator('.shopping_cart_badge')
        }
    }

    get otherElements(){
        return{
            pageTitle: this.page.locator('.title')
        }
    }

    addCartButton(productName: string) { 
        return this.page.locator(`//div[.="${productName}"]//ancestor::div[@class="inventory_item"]//button`) 
    }

    get allItems(){
        return {
        allCards: this.page.locator(`div.inventory_item:nth-child(n) > div:nth-child(2) .btn`)
        }
    }

}