const { test, expect } = require('@playwright/test')

test('Verify Doubleclick in playwright', async ({ page }) => {
     await page.goto('https://demoqa.com/buttons')
     await page.locator('#doubleClickBtn').dblclick()
     await expect(page.locator('#doubleClickMessage')).toBeVisible()
     await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')
     //await page.waitForTimeout(4000)
})

test('Verify rightclick in playwright', async ({ page }) => {
     await page.goto('https://demoqa.com/buttons')
     await page.locator('#rightClickBtn').click({ button: 'right' })
     let ele1 = await page.locator('#rightClickMessage')
     await expect(ele1).toBeVisible()
     let ele2 = page.locator('#rightClickMessage')
     await expect(ele2).toHaveText('You have done a right click')
     await page.waitForTimeout(4000)

})

test('Verify mouse hover action in playwright',async({page})=>{
     await page.goto('https://webdriveruniversity.com/Actions/index.html')
     await page.getByText('Hover Over Me Third!!').hover()
     await page.getByAltText('Link 1').nth(2).click()
     page.on('dialog',async simpleAlert =>{
          await expect(simpleAlert.message()).toContain('Well done you clicked on the link!')
          await simpleAlert.accept()
      })
      await page.waitForTimeout(4000)
})