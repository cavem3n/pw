import { test, expect } from '@playwright/test';

test.describe('P101 Scenarios', () => {

    test('Simple Form Demo', async ({ page }) => {
      await page.goto('https://www.testmuai.com/selenium-playground/', {
          waitUntil: 'networkidle'
        });
      await expect(page).toHaveTitle(/Selenium Grid Online | Run Selenium Test On Cloud/);
      await page.getByText('Simple Form Demo').click();
      await page.waitForURL(/simple-form-demo/, {
          waitUntil: 'networkidle'
        });
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(/simple-form-demo/);
      const welcomeMessage:string = "Playwright Test"
      await page.getByPlaceholder('Please enter your Message').fill(welcomeMessage);
      await page.locator('#showInput').click();
      await expect(page.locator('#message').first()).toContainText('Playwright Test');
    });

    test('Slider Demo', async ({ page }) => {
      await page.goto('https://www.testmuai.com/selenium-playground/', {
          waitUntil: 'networkidle'
        });
      await expect(page).toHaveTitle(/Selenium Grid Online | Run Selenium Test On Cloud/);
      await page.getByText('Drag & Drop Sliders').click();
      await page.waitForURL(/drag-drop-range-sliders-demo/, {
          waitUntil: 'networkidle'
        });
      const slider = page.locator('.sp__range-success > input:nth-child(1)');
      await expect(slider).toBeVisible();
      await slider.click();
      let value = Number(await slider.inputValue());
        while (value < 95) {
            await page.keyboard.press('ArrowRight');
            value = Number(await slider.inputValue());
        }
      await expect(page.locator('#rangeSuccess')).toHaveText('95');
    });

    test('Input Form Demo', async ({ page }) => {
      await page.goto('https://www.testmuai.com/selenium-playground/', {
          waitUntil: 'networkidle'
        });
      await expect(page).toHaveTitle(/Selenium Grid Online | Run Selenium Test On Cloud/);
      await page.getByText('Input Form Submit').click();
      await page.waitForURL(/input-form-demo/, {
          waitUntil: 'networkidle'
        });
      await page.getByRole('button', { name: 'Submit' }).click()
      const input = page.locator('#name');
      const message = await input.evaluate((el) => {
          return (el as HTMLInputElement).validationMessage;
        });
        expect(message).toMatch(/Please fill out this field\.|Completa este campo|Fill out this field/);
      console.log(message)
      await input.fill('Aleksander Vinkter');
      await page.locator('//*[@id="inputEmail4"]').fill('AleksanderVinkter@testmuai.com');
      await page.locator('//*[@id="inputPassword4"]').fill('password');
      await page.locator('//*[@id="company"]').fill('Testing INC.');
      await page.locator('//*[@id="websitename"]').fill('https://www.testmuai.com');
      await page.locator('select[name="country"]').selectOption({ label: 'United States' });
      await expect(page.locator('select[name="country"]')).toHaveValue('US');
      await page.locator('//*[@id="inputCity"]').fill('Chicago');
      await page.locator('//*[@id="inputAddress1"]').fill('Levin AV 782');
      await page.locator('//*[@id="inputAddress2"]').fill('North 78c');
      await page.locator('//*[@id="inputState"]').fill('Illinois');
      await page.locator('//*[@id="inputZip"]').fill('60131');
      await page.locator('.bg-lambda-900').click()
      await expect(page.locator('.success-msg')).toContainText('Thanks for contacting us');
    });
});