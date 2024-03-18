const { test, expect } = require("@playwright/test")

test('verify the Dynamic DropDown', async ({ page }) => {
     await page.goto('https://www.redbus.in/')
     await page.locator('#src').fill('pune', { delay: 2000 })
     await page.waitForSelector('.placeHolderMainText')
     let option = await page.locator('.placeHolderMainText').count()
     //console.log(option)
     // let text=await(await page.locator('.placeHolderMainText')).last().textContent()
     // console.log(text)
     for (let i = 2; i < option; i++) {
          let text = await page.locator('.placeHolderMainText').nth(2).textContent()
          console.log(text)
          if (text === 'Viman Nagar') {
               await page.locator('.placeHolderMainText').nth(i).click()
               break;

          }
     }
     await page.waitForTimeout(4000)

})