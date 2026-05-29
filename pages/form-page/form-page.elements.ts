import { Page } from "@playwright/test"

export class FormPageElements {
    private page: Page

    constructor(page: Page) {
        this.page = page
    }

    get inputfields() {
        return {
            firtsName: this.page.locator('#firstName'),
            lastName: this.page.locator('#lastName'),
            email: this.page.locator('#userEmail'),
            mobile: this.page.locator('#userNumber'),
            address: this.page.locator('#currentAddress'),
            subjects: this.page.locator('#subjectsInput'),
            subjectsmenu: this.page.locator('.subjects-auto-complete__menu')
        }
    }

    get checkboxes() {
        return {
            male: this.page.locator('#gender-radio-1'),
            female: this.page.locator('#gender-radio-2'),
            other: this.page.locator('#gender-radio-3'),
            sports: this.page.locator('#hobbies-checkbox-1'),
            reading: this.page.locator('#hobbies-checkbox-2'),
            music: this.page.locator('#hobbies-checkbox-3')
        }
    }

    get dropdown(){
        return{
            birth: this.page.locator('#dateOfBirthInput'),
            month: this.page.locator('.react-datepicker__month-select'),
            year: this.page.locator('.react-datepicker__year-select'),
            state: this.page.locator('#react-select-3-input'),
            city: this.page.locator('#react-select-4-input'),
            datepicker: this.page.locator('.react-datepicker')
        }
    }

    getDayBirth(day:string){
        return this.page.locator(`div.react-datepicker__day--0${day}:nth-child(${day})`).first()
    }

    getMonthBirth(month:string){
        return this.page.locator(`.react-datepicker__month-select > option:nth-child(${month})`)
    }

    getYearhBirth(year:string){
        return this.page.locator(`.react-datepicker__year-select > option:nth-child(${19+year})`)
    }

    get buttons() {
        return {
            browse: this.page.locator('#uploadPicture'),
            submit_btn: this.page.locator('#submit')
        }
    }

    get modal(){
        return{
            modal: this.page.locator('.modal-open'),
            studentName: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2)'),
            emailOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(2)'),
            genderOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(3) > td:nth-child(2)'),
            mobileOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(2)'),
            dateofBirthOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(5) > td:nth-child(2)'),
            subjectsOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(6) > td:nth-child(2)'),
            hobbiesOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(7) > td:nth-child(2)'),
            attachmentOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(8) > td:nth-child(2)'),
            addressOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(9) > td:nth-child(2)'),
            stateCityOutput: this.page.locator('.table > tbody:nth-child(2) > tr:nth-child(10) > td:nth-child(2)')
        }
    }
}