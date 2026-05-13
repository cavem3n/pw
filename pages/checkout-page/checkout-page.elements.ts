import {Page} from 'playwright'

export class CheckoutPageElements{
    private page: Page

    constructor(page: Page){
        this.page = page
    }

    get inputs(){
        return{
            firstName: this.page.locator('#first-name'),
            lastName: this.page.locator('#last-name'),
            postalCode: this.page.locator('#postal-code')
        }
    }
    get buttons(){
        return{
            cancel: this.page.locator('#cancel'),
            continue: this.page.locator('#continue')
        }
    }
}