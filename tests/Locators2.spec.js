//const { test,expect } = require('@playwright/test')
import { test, expect } from '@playwright/test'   //second way
test('locators', async ({ page }) => {
     await page.goto("https://demoblaze.com/")


     //click on login button - property
     //await page.locator("id=login2").click()
     await page.click('id=login2')                                 //another way

     //provide username - CSS
     // await page.locator('#loginusername').fill("madhuri")       //another way
     await page.fill('#loginusername', 'pavanol')
     //await page.type('#loginusername','pavanol')                 //another way

     //provide password - CSS
     await page.fill("input[id='loginpassword']", 'test@123')

     //click on login button
     await page.click('#logInModal > div > div > div.modal-footer > button.btn.btn-primary')

     //verify logoutlink presence
     const logoutlink = await page.locator("#logout2")

     await expect(logoutlink).toBeVisible()

     await page.close()
})