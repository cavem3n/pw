import { Page } from 'playwright'
import path from 'path'
import fs from 'fs'
import { Logger } from '../../support/logger'
import { FormPageElements } from './form-page.elements.ts'
import { expect } from '@playwright/test'

export class FormPageMethods {
    private page: Page
    private formPageElements: FormPageElements

    constructor(page: Page) {
        this.page = page
        this.formPageElements = new FormPageElements(page)
    }

     async fillForm(firstName:string,
                    lastName:string,
                    userEmail:string,
                    gender:string,
                    phone:string,
                    birth:string,
                    subjects:string,
                    hobbies:string,
                    state:string,
                    city:string,
                    address:string) {

        await Logger.logStep(`Filling data of ${firstName} ${lastName}`)
        await this.formPageElements.inputfields.firtsName.fill(firstName)
        await this.formPageElements.inputfields.lastName.fill(lastName)
        await this.formPageElements.inputfields.email.fill(userEmail)
            if (gender == "Male") {await this.formPageElements.checkboxes.male.click()}
            else if (gender == "Female"){await this.formPageElements.checkboxes.female.click()}
            else if (gender == "Other"){await this.formPageElements.checkboxes.other.click()}
        await this.formPageElements.inputfields.mobile.fill(phone)
        const day = parseInt(birth.split("/")[0])*1
        const month = parseInt(birth.split("/")[1])*1
        const year = parseInt(birth.split("/")[2])*1+1900
        var inputMonth:string = ""
                 if ( month == 1) {var inputMonth:string = "Jan"} 
            else if ( month == 2) {var inputMonth:string = "Feb"} 
            else if ( month == 3) {var inputMonth:string = "Mar"} 
            else if ( month == 4) {var inputMonth:string = "Apr"}
            else if ( month == 5) {var inputMonth:string = "May"} 
            else if ( month == 6) {var inputMonth:string = "Jun"} 
            else if ( month == 7) {var inputMonth:string = "Jul"} 
            else if ( month == 8) {var inputMonth:string = "Aug"} 
            else if ( month == 9) {var inputMonth:string = "Sep"} 
            else if ( month == 10) {var inputMonth:string = "Oct"} 
            else if ( month == 11) {var inputMonth:string = "Nov"} 
            else if ( month == 12) {var inputMonth:string = "Dec"}
        await this.formPageElements.dropdown.birth.fill(`${day} ${inputMonth} ${year}`), this.page.keyboard.press('Tab')
        const subjectsArray = subjects.split(",")
                for (const subject of subjectsArray) {const subjectTrim = subject.trim()
                    await this.formPageElements.inputfields.subjects.pressSequentially(subjectTrim, { delay: 20 })
                    await this.formPageElements.inputfields.subjectsmenu.isVisible()
                    await this.page.keyboard.press('Tab')}
        const hobbiesArray = hobbies.split(",")
                for (const hobbie of hobbiesArray) {const hobbiesTrim = hobbie.trim()
                    if (hobbiesTrim == "Sports") {await this.formPageElements.checkboxes.sports.check()}
                    else if (hobbiesTrim == "Reading") {await this.formPageElements.checkboxes.reading.check()}
                    else if (hobbiesTrim == "Music") {await this.formPageElements.checkboxes.music.check()}
                }
        const imagePath = path.join(process.cwd(), 'data', 'pic.jpg');
        //console.log(fs.existsSync(imagePath));
        await this.formPageElements.buttons.browse.setInputFiles(imagePath)
        await this.formPageElements.inputfields.address.fill(address)
        await this.formPageElements.dropdown.state.fill(state)
        await this.page.keyboard.press('Tab')
        await this.formPageElements.dropdown.city.fill(city)
        await this.page.keyboard.press('Tab')
        await this.formPageElements.buttons.submit_btn.click()
        await this.formPageElements.modal.modal.isVisible()

        await Logger.logVerification(`Verify Data is Correct`, async () => {
            await expect(this.formPageElements.modal.studentName).toContainText(`${firstName} ${lastName}`);
            await expect(this.formPageElements.modal.emailOutput).toContainText(`${userEmail}`);
            await expect(this.formPageElements.modal.genderOutput).toContainText(`${gender}`);
            await expect(this.formPageElements.modal.mobileOutput).toContainText(`${phone}`);
            const shortMonths = [
                    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];
            const inputMonth = shortMonths[month - 1];
            const monthMap: Record<string, string> = {
                    Jan: 'January',
                    Feb: 'February',
                    Mar: 'March',
                    Apr: 'April',
                    May: 'May',
                    Jun: 'June',
                    Jul: 'July',
                    Aug: 'August',
                    Sep: 'September',
                    Oct: 'October',
                    Nov: 'November',
                    Dec: 'December'
                };
            const fullMonth = monthMap[inputMonth];
            const fullDay = day
            const formattedDay = String(fullDay).padStart(2, '0');
            await expect(this.formPageElements.modal.dateofBirthOutput).toContainText(`${formattedDay} ${fullMonth},${year}`);
            await expect(this.formPageElements.modal.subjectsOutput).toContainText(`${subjects}`);
            await expect(this.formPageElements.modal.hobbiesOutput).toContainText(`${hobbies}`);
            await expect(this.formPageElements.modal.attachmentOutput).toContainText('pic.jpg');
            await expect(this.formPageElements.modal.addressOutput).toContainText(`${address}`);
            await expect(this.formPageElements.modal.stateCityOutput).toContainText(`${state} ${city}`);
            });

    }
}