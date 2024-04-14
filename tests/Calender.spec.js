
const { test, expect } = require('@playwright/test')

test.only('DatePicker', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/')
     await page.locator('#datepicker').fill('03/28/2024')
     await page.waitForTimeout(6000)
})

test('verify the datepicker', async ({ page }) => {
     await page.goto('https://www.webdriveruniversity.com/Datepicker/index.html')
     const year = '2025'
     const month = "June"
     const day = "14"

     await page.locator('#datepicker').click()
     console.log(`${month} ${year}`)


     while (true) {
          let monthyear = await page.locator('[class="datepicker-switch"]').first().textContent()
          if (monthyear === `${month} ${year}`) {
               break

          }
          await page.locator('[class="next"]').first().click()
     }
     await page.waitForTimeout(4000)

})