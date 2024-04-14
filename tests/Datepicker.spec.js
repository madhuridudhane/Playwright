const { test, expect } = require('@playwright/test')

test.skip('DatePicker', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('#datepicker').fill('03/28/2025')
     await page.waitForTimeout(3000)
})

test('DatePicker', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/')

     const year = "2025"
     const month = "March"
     const date = "20"

     await page.locator('#datepicker').click()

     while (true) {
          let currentYear = await page.locator('.ui-datepicker-year').textContent()
          let currentMonth = await page.locator('.ui-datepicker-month').textContent()
          if (currentYear == year && currentMonth == month) {
               break
          }
          await page.locator('[title="Next"]').click()
     }
     await page.waitForTimeout(3000)
})