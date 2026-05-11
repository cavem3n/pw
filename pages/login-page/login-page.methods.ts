import { Page } from 'playwright';
import { LoginPageElements } from './login-page.elements';

export class LoginPageMethods{
    private page: Page
    private loginPageElements: LoginPageElements

    constructor(page: Page){
        this.page = page
        this.loginPageElements = new LoginPageElements(page)
    }

    async insertUsername(username: string){
        await this.loginPageElements.textboxes.username.fill(username)
    }

    async insertPwd(pwd: string){
        await this.loginPageElements.textboxes.username.fill(pwd)
    }

    async clickLogin(){
        await this.loginPageElements.buttons.login_btn.click()
    }

}