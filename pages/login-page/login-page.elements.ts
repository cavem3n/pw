import {type Page } from '@playwright/test';

export class LoginPageElements{
    private page: Page

    constructor(page: Page){
        this.page = page
    }

    get textboxes(){
        return{
            username: this.page.locator('#user-name'),
            password: this.page.locator('#password')
        }
    }

    get buttons(){
        return{
            login_btn: this.page.locator('#login-button')
        }
    }

}