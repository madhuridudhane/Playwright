const { test, expect } = require('@playwright/test');

test('Handle DropDown', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/')

     //Multiple ways to select option from dropdown
     // await page.locator('#country').selectOption({label:'India'})   //bylabel
     // await page.locator('#country').selectOption('India')  //visibletext
     // await page.locator('#country').selectOption({value:'uk'})  //usingvalue
     // await page.locator('#country').selectOption({index:1})  //using index
     //await page.selectOption("#country",'India')   //by Text

     //Assertion
     //check no of options in dropdown  Approach-1
     //  const option=await page.locator('#country option')
     //  await expect(option).toHaveCount(10)

     //check no of options in dropdown  Approach-2
     //  const options=await page.$$('#country option')
     //console.log("number of options:",options.length)
     //await expect(options.length).toBe(10)

     //check no of options in dropdown  Approach-3
     //  const cotent=await page.locator('#country').textContent()
     //  await expect(cotent.includes('India')).toBeTruthy()

     //check presence of value in dropdown  Approach-3
     const options = await page.$$('#country option')
     for (const option of options) {
          console.log(await option.textContent())
     }

     await page.waitForTimeout(3000);


})