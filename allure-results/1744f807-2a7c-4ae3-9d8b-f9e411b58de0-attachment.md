# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login >> TC-LOGIN-006 Logout
- Location: tests\login.spec.ts:65:21

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: 1
Received: 0
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: secret_sauce
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]
        - img [ref=e16]
      - 'heading "Epic sadface: Password is required" [level=3] [ref=e19]':
        - button [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: Password is required"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { Page } from 'playwright'
  2  | import { ProductsPageElements } from './products-page.elements.ts'
  3  | import { Logger } from '../../support/logger'
  4  | import { expect } from '@playwright/test'
  5  | export class ProductsPageMethods {
  6  |     private page: Page
  7  |     private productsPageElements: ProductsPageElements
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page
  11 |         this.productsPageElements = new ProductsPageElements(page)
  12 |     }
  13 | 
  14 |     async clickOnAddToCart(productName: string) {
  15 |         await Logger.logStep(`Click on Add To Cart button corresponding to "${productName}"`)
  16 |         await this.productsPageElements.addCartButton(productName).click()
  17 |     }
  18 | 
  19 |     async clickOnCartIcon() {
  20 |         await Logger.logStep('Click on Cart icon')
  21 |         await this.productsPageElements.icons.cart.click();
  22 |     }
  23 | 
  24 |     async verifyProductsPageIsDisplayed() {
  25 |         await Logger.logVerification('Verify that the Products page is shown')
  26 |         const elementsCount = await this.productsPageElements.otherElements.pageTitle.count()
> 27 |         expect(elementsCount).toEqual(1)
     |                               ^ Error: expect(received).toEqual(expected) // deep equality
  28 |     }
  29 | }
```