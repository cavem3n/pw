import { test } from '@playwright/test'
import { CommonPageMethods } from '../pages/common-page/common-page.methods.ts'
import { LoginPageMethods } from '../pages/login-page/login-page.methods.ts'
import { ProductsPageMethods } from '../pages/products-page/products-page.methods.ts'
import { Logger } from '../support/logger'
import { standardUser } from '../pages/login-page/login-page.interfaces.ts'
import { CartPageMethods } from '../pages/cart-page/cart-page.methods.ts'

test.describe('Cart test cases', async () => {

    test('TC-CART-001 Add item to cart', async ({ page }) => {
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        const cartPageMethods = new CartPageMethods(page)
        const productName = 'Sauce Labs Bolt T-Shirt'

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

        Logger.logPreCondition('Item is in the cart')
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.clickOnAddToCart(productName)

        await productsPageMethods.clickOnCartIcon()
        await cartPageMethods.clickOnRemoveButton(productName)
        await cartPageMethods.verifyProductIsNotDisplayed(productName)
    })

    test('TC-CART-003 Add all items to cart', async ({page}) =>{
        const commonPageMethods = new CommonPageMethods(page)
        const loginPageMethods = new LoginPageMethods(page)
        const productsPageMethods = new ProductsPageMethods(page)
        
        await commonPageMethods.navigateToTheApplication()
        await loginPageMethods.login(standardUser)
        await productsPageMethods.verifyProductsPageIsDisplayed()
        await productsPageMethods.addAllItemsToCart()
    })
})