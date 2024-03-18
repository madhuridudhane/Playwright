const { test, expect } = require("@playwright/test")

test("Handling Radio butons in playwright", async ({ page }) => {
     await page.goto('https://www.demo.guru99.com/test/radio.html')
     await expect(page.locator("#vfb-7-1")).not.toBeChecked()
     await page.locator("#vfb-7-1").check()
     await expect(page.locator("#vfb-7-1")).toBeChecked()
     await page.waitForTimeout(4000)
     await page.locator("#vfb-7-2").check()
     await expect(page.locator("#vfb-7-3")).not.toBeChecked()


})

test("Handling checkBox in playwright", async ({ page }) => {
     await page.goto('https://www.demo.guru99.com/test/radio.html')
     await expect(page.locator("#vfb-6-0")).not.toBeChecked()
     await page.locator("#vfb-6-0").check()
     await page.waitForTimeout(4000)
     await expect(page.locator("#vfb-6-0")).toBeChecked()
})

test.only("Handling checkBox using click() in playwright", async ({ page }) => {
     await page.goto('https://www.demo.guru99.com/test/radio.html')
     await page.locator("#vfb-6-0").click()
     await page.waitForTimeout(4000)
     await expect(page.locator("#vfb-6-0")).toBeChecked()
     await expect(page.locator("#vfb-6-1")).not.toBeChecked()
})