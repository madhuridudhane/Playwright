
const { test, expect } = require('@playwright/test')

test('verify the drag and drop using inbuilt command', async ({ page }) => {
     await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
     let Rome = await page.locator('#box6')
     let Italy = await page.locator('#box106')
     await Rome.dragTo(Italy)
     expect(await page.locator('#box6')).toHaveAttribute('style', 'visibility: visible; background-color: rgb(0, 255, 0);')
     await page.waitForTimeout(3000)

})