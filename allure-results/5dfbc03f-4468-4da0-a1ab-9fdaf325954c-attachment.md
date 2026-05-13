# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login >> TC-LOGIN-005 Login with blocked user
- Location: tests\login.spec.ts:54:17

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Sorry, this user has been locked out."
Received string:    "Epic sadface: Password is required"
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
  2  | import { LoginPageElements } from './login-page.elements.ts'
  3  | import { Logger } from '../../support/logger'
  4  | import { expect } from '@playwright/test'
  5  | import { User } from './login-page.interfaces.ts'
  6  | 
  7  | export class LoginPageMethods {
  8  |     private page: Page
  9  |     private loginPageElements: LoginPageElements
  10 | 
  11 |     constructor(page: Page) {
  12 |         this.page = page
  13 |         this.loginPageElements = new LoginPageElements(page)
  14 |     }
  15 | 
  16 |     async insertUsername(username: string){
  17 |         await Logger.logStep(`Insert "${username}" as username`)
  18 |         await this.loginPageElements.textboxes.username.fill(username)
  19 |     }
  20 | 
  21 |     async insertPassword(password: string){
  22 |         await Logger.logStep(`Insert "${password}" as password`)
  23 |         await this.loginPageElements.textboxes.password.fill(password)
  24 |     }
  25 | 
  26 |     async clickOnLoginButton(){
  27 |         await Logger.logStep('Click on Login button')
  28 |         await this.loginPageElements.buttons.login.click()
  29 |     }
  30 | 
  31 |     async verifyMessage(expectedText: string){
  32 |         const text = await this.loginPageElements.otherElements.errorMessage.textContent()
> 33 |         expect(text).toContain(expectedText)
     |                      ^ Error: expect(received).toContain(expected) // indexOf
  34 |     }
  35 | 
  36 |     async login(user: User){
  37 |         await this.insertUsername(user.username)
  38 |         await this.insertPassword(user.password)
  39 |         await this.clickOnLoginButton()
  40 |     }
  41 | 
  42 |     async verifyLoginPage(expectedText: string){
  43 |         const text = await this.loginPageElements.otherElements.loginMessage.textContent()
  44 |         expect(text).toContain(expectedText)
  45 |     }
  46 | }
```