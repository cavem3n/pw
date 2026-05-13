import { Page, expect } from "@playwright/test";
import { CheckoutOverviewPageElements } from "./checkout-overview-page.elements.ts";
import { Logger } from "../../support/logger";

export class CheckoutOverviewPageMethods {
    private page: Page
    private checkoutOverviewPageElements: CheckoutOverviewPageElements

    constructor(page: Page) {
        this.page = page;
        this.checkoutOverviewPageElements = new CheckoutOverviewPageElements(page)
    }

    async clickOnCancelButton() {
        await Logger.logStep('Click on Cancel button')
        await this.checkoutOverviewPageElements.buttons.cancel.click();
    }

    async clickOnFinishButton() {
        await Logger.logStep('Click on Finish button')
        await this.checkoutOverviewPageElements.buttons.finish.click();
    }

    async verifyCheckoutOverviewPageIsDisplayed(){
        await Logger.logVerification('The Checkout Overview page should be displayed')
        const elementCount = await this.checkoutOverviewPageElements.otherElements.pageTitle.count()
        expect(elementCount).toEqual(1)
    }
}