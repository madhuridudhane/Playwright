const { test, expect } = require("@playwright/test")
const exp = require("constants")

test("verify the login functionality with valid credentials", async ({ page }) => {
     await page.goto("https://www.saucedemo.com/")
     await page.locator('#user-name').fill("standard_user")
     await page.locator('#password').fill("secret_sauce")
     await page.locator('#login-button').click()
     await page.waitForTimeout(4000)
     await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
     await expect(page.locator('.title')).toHaveText("Products")
     await expect(page.locator('.shopping_cart_link')).toBeVisible()
     await expect(page).toHaveTitle("Swag Labs")
     await expect(page.locator('.app_logo')).toHaveText("Swag Labs")
})

test.only("verify invalid credentials", async ({ page }) => {
     await page.goto("https://www.saucedemo.com/")
     await page.locator('#user-name').fill("standard_user1")
     await page.locator('#password').fill("secret_sauce1")
     await page.locator('#login-button').click()
     await page.waitForTimeout(4000)
     await expect(page.locator('div[class="error-message-container error"]')).toHaveText("Epic sadface: Username and password do not match any user in this service")
})