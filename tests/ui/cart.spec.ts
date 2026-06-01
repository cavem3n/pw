import { test, expect } from '@playwright/test'
import { CommonPageMethods } from '../../pages/common-page/common-page.methods.ts'
import { LoginPageMethods } from '../../pages/login-page/login-page.methods.ts'
import { ProductsPageMethods } from '../../pages/products-page/products-page.methods.ts'
import { Logger } from '../../support/logger.ts'
import { standardUser } from '../../pages/login-page/login-page.interfaces.ts'
import { CartPageMethods } from '../../pages/cart-page/cart-page.methods.ts'
import * as allure from 'allure-js-commons'
import { Severity } from 'allure-js-commons'

test.describe('Cart test cases', async () => {

    test('TC-CART-001 Add item to cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

        await allure.severity(Severity.NORMAL)
        Logger.logPreCondition('User is logged in')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProductsPageIsDisplayed()

        await productsPageMethods.clickOnAddToCart(productName)
        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.verifyProductIsDisplayed(productName)
    })


    test('TC-CART-002 Remove item from cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

        await allure.severity(Severity.NORMAL)
        Logger.logPreCondition('Item is in the cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.clickOnAddToCart(productName)

        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.clickOnRemoveButton(productName)
        await cartPageMethods.verifyProductIsNotDisplayed(productName)
    })

    test('TC-CART-003 Add all items to cart at once', async ({page}) =>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)

        await allure.severity(Severity.CRITICAL)
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProductsPageIsDisplayed()
        await productsPageMethods.addAllItemsToCart()
    })

        test('TC-CART-004 Add all items to cart by each one', async ({page}) =>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)

        await allure.severity(Severity.CRITICAL)
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProductsPageIsDisplayed()
        await productsPageMethods.addEachItemToCart()
    })

    test('TC-CART-005 Random Item title checking', async ({page}) =>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)

        await allure.severity(Severity.CRITICAL)
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProductsPageIsDisplayed()
        //await productsPageMethods.addRandomItemToCart()
        const tituloRProducto = await productsPageMethods.addRandomItemToCart()
        await productsPageMethods.clickOnCartIcon()
        const tituloRCarro = await cartPageMethods.verifyRandomProductIsDisplayed()
        expect(tituloRProducto).toEqual(tituloRCarro)
    })
    
})