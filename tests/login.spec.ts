import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods.ts'
import { LoginPageMethods } from '../pages/login-page/login-page.methods.ts'
import { LoginPageData } from '../pages/login-page/login-page-data.ts'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods.ts'
import * as allure from 'allure-js-commons'
import { Severity } from 'allure-js-commons'
import * as interfaces from '../pages/login-page/login-page.interfaces.ts'

const credentials = LoginPageData.credentials

test.describe('Login', () => {

    test('TC-LOGIN-001 Login with valid credentials', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        await allure.severity(Severity.CRITICAL)
        await test.step('Open URL', async () => {
        await commonPageMethods.navigateToTheApplication()
        });
        await test.step('Input credentials', async () => {
        await loginPageMethods.insertUsername(credentials.usernames.standardUser)
        await loginPageMethods.insertPassword(credentials.password)
        });
        await test.step('Click on Login button', async () => {
        await loginPageMethods.clickOnLoginButton()
        });
        await test.step('Check Product Page title', async () => {
        await productsPageMethods.verifyProductsPageIsDisplayed()
        });
    })

    test('TC-LOGIN-002 & TC-LOGIN-003 Login with invalid credentials', async ({ page }) => {
        
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        await allure.severity(Severity.CRITICAL)
        await test.step('Open URL', async () => {
        await commonPageMethods.navigateToTheApplication()
        });
        await test.step('Input credentials', async () => {
        await loginPageMethods.insertUsername('random123')
        await loginPageMethods.insertPassword('random123')
        });
        await test.step('Click on Login button', async () => {
        await loginPageMethods.clickOnLoginButton()
        });
        await test.step('Check Error Message', async () => {
        await loginPageMethods.verifyMessage('Username and password do not match any user in this service')
        });
    })

    test('TC-LOGIN-004 Login with blank user', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        await allure.severity(Severity.CRITICAL)
        await test.step('Open URL', async () => {
        await commonPageMethods.navigateToTheApplication()
        });
        await test.step('Click on Login button', async () => {
        await loginPageMethods.clickOnLoginButton()
        });
        await test.step('Check Error Message', async () => {
        await loginPageMethods.verifyMessage('Username is required')
        });
    })

    test('TC-LOGIN-004.1 Login with blank password', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        
        await allure.severity(Severity.CRITICAL)
        await test.step('Open URL', async () => {
        await commonPageMethods.navigateToTheApplication()
        });
        await test.step('Input Username', async () => {
        await loginPageMethods.insertUsername('random123')
        });
        await test.step('Click on Login button', async () => {
        await loginPageMethods.clickOnLoginButton()
        });
        await test.step('Check Error Message', async () => {
        await loginPageMethods.verifyMessage('Password is required')
        });
    })

    test('TC-LOGIN-005 Login with blocked user', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        await allure.severity(Severity.CRITICAL)
        await test.step('Open URL', async () => {
        await commonPageMethods.navigateToTheApplication()
        });
        await test.step('Input Username', async () => {
        await loginPageMethods.insertUsername(credentials.usernames.lockedOutUser)
        });
        await test.step('Input Password', async () => {
        await loginPageMethods.insertPassword(credentials.password)
        });
        await test.step('Click on Login button', async () => {
        await loginPageMethods.clickOnLoginButton()
        });
        await test.step('Check Error Message', async () => {
        await loginPageMethods.verifyMessage('Sorry, this user has been locked out.')
        });
    })
    test('TC-LOGIN-006 Logout', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        
        await allure.severity(Severity.CRITICAL)
        await test.step('Open URL', async () => {
        await commonPageMethods.navigateToTheApplication()
        });
        await test.step('Input Username', async () => {
        await loginPageMethods.insertUsername(credentials.usernames.standardUser)
        });
        await test.step('Input Password', async () => {
        await loginPageMethods.insertPassword(credentials.password)
        });
        await test.step('Click on Login button', async () => {
        await loginPageMethods.clickOnLoginButton()
        });
        await test.step('Check Product Page title', async () => {
        await productsPageMethods.verifyProductsPageIsDisplayed()
        });
        await test.step('Open SideMenu', async () => {
        await commonPageMethods.openMenu()
        });
        await test.step('Click LogOut', async () => {
        await commonPageMethods.clickOnLogOutOption()
        });
    })
})