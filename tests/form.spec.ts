import { test } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { parse } from "csv-parse/sync";
import { CommonPageMethods } from '../pages/common-page/common-page.methods.ts'
import { FormPageMethods } from '../pages/form-page/form-page.methods.ts'
import * as allure from 'allure-js-commons'
import { Severity } from 'allure-js-commons'

test.describe('Form Automation', () => {

  const records = parse(fs.readFileSync(path.join(__dirname, '../data.csv')), {
    columns: true,
    skip_empty_lines: false,
  });

  for (const record of records) {

    test(`foo: ${record.test_case}`, async ({ page }) => {
      const commonPageMethods = new CommonPageMethods(page)
      const formPageMethods = new FormPageMethods(page)
      const firstName:string = record.firstName
      const lastName:string = record.lastName
      const userEmail:string = record.userEmail
      const gender:string = record.gender
      const phone:string = record.phone
      const birth:string = record.birth
      const subjects:string = record.subjects
      const hobbies:string = record.hobbies
      const state:string = record.state
      const city:string = record.city
      const address:string = record.address
      await commonPageMethods.navigatoToForm()
      await formPageMethods.fillForm(firstName, lastName, userEmail, gender, phone, birth, subjects, hobbies, state, city, address)
    });
    
  }

})