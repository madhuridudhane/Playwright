const { test, expect } = require("@playwright/test")

test("verify the static dropdown in playwright", async ({ page }) => {
     await page.goto("https://letcode.in/dropdowns")
     await page.locator('#fruits').selectOption('2')
     await expect(page.locator('p[class="subtitle"]')).toBeVisible()
     await expect(page.locator('p[class="subtitle"]')).toHaveText("You have selected Orange")
     await page.locator("#superheros").selectOption('bt')
     await expect(page.locator("p[class='subtitle']").last()).toBeVisible()
     await expect(page.locator("p[class='subtitle']").last()).toHaveText("You have selected Batman")
     await page.waitForTimeout(4000)
})