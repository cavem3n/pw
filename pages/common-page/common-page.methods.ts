import { Page } from 'playwright'
import { CommonPageElements } from './common-page.elements.ts'
import { Logger } from '../../support/logger'
import { FormPageElements } from './form-page.elements.ts'
import { expect } from '@playwright/test'

export class CommonPageMethods {
    private page: Page
    private commonPageElements: CommonPageElements
    private formPageElements: FormPageElements

    constructor(page: Page) {
        this.page = page
        this.commonPageElements = new CommonPageElements(page)
        this.formPageElements = new FormPageElements(page)
    }

    async navigateToTheApplication() {
        await Logger.logStep('Navigate to the Application')
        await this.page.goto('https://www.saucedemo.com')
    }

    async openMenu() {
        await Logger.logStep('Click on Open Menu icon')
        await this.commonPageElements.buttons.openMenu.click()
    }

    async clickOnAllItemsOption() {
        await Logger.logStep('Click on All Items option')
        await this.commonPageElements.letfMenu.allItems.click()
    }

    async clickOnAboutOption() {
        await Logger.logStep('Click on About option')
        await this.commonPageElements.letfMenu.about.click()
    }

    async clickOnLogOutOption() {
        await Logger.logStep('Click on Logout option')
        await this.commonPageElements.letfMenu.logout.click()
    }

    async clickOnResetAppStateOption() {
        await Logger.logStep('Click on Reset App State')
        await this.commonPageElements.letfMenu.resetAppState.click();
    }

    async navigatoToForm() {
        await Logger.logStep('Navigate to the Application')
        await this.page.goto('https://demoqa.com/automation-practice-form')
        await expect(this.formPageElements.modal.form).isVisible()
    }
}