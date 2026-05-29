import { test } from '@playwright/test'
import fs from 'fs'
import path from 'path'
import { parse } from "csv-parse/sync"
import { CommonPageMethods } from '../pages/common-page/common-page.methods.ts'
import { FormPageMethods } from '../pages/form-page/form-page.methods.ts'
import { readCsv } from '../support/csvHelper.ts'
import * as allure from 'allure-js-commons'
import { Severity } from 'allure-js-commons'

//CSV Data must be loaded before Describe in Test
  const csvPath = path.join(process.cwd(), 'data', 'data.csv')
  const records = readCsv(csvPath)
  console.log('TOTAL RECORDS:', records.length);

test.describe('Form Automation', () => {

  // //Path verification
  // console.log('CSV PATH:', './data/data.csv');
  // console.log('Exists?', fs.existsSync('./data/data.csv'));
  // console.log('IMG PATH:', './data/pic.jpg');
  // console.log('Exists?', fs.existsSync('./data/pic.jpg'));

  // const records = parse(fs.readFileSync(path.join(process.cwd(), 'data', 'data.csv')), {
  //   columns: true,
  //   skip_empty_lines: false,
  // });
    
  // CI Logging
    console.log('CWD:', process.cwd());
    console.log('CSV PATH:', csvPath);
    console.log('FILE EXISTS:', fs.existsSync(csvPath));
    console.log('RAW FILE SIZE:', fs.readFileSync(csvPath).length);
    console.log('RECORDS LENGTH:', records.length);
    console.log('FIRST RECORD:', records[0]);

  for (const record of records) {

    test(`foo: ${record.test_case} @slow`, async ({ page }) => {
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