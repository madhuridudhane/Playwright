const { test, expect } = require("@playwright/test");

test("login with valid credentials", async ({ page }) => {
     await page.goto("https://demoblaze.com/index.html")
     await page.locator("#login2").click()
     await page.locator('input[id="loginusername"]').fill('pavanol')
     await page.locator('input[id="loginpassword"]').fill('test@123')
     await page.locator('button[onclick="logIn()"]').click()
     await page.waitForTimeout(3000)
     await expect(page.locator('#nameofuser')).toHaveText("Welcome pavanol")
     await expect(page.locator('a[id="nava"]')).toBeVisible()
})

test("login with valid credentials", async ({ page }) => {
     await page.goto("https://demoblaze.com/index.html")
     await page.locator("#login2").click()
     await page.locator('input[id="loginusername"]').fill('pavanol')
     await page.locator('input[id="loginpassword"]').fill('test@123')
     await page.locator('button[onclick="logIn()"]').click()
     await page.waitForTimeout(3000)
     await expect(page.locator('#nameofuser')).toHaveText("Welcome pavanol")
     await expect(page.locator('a[id="nava"]')).toBeVisible()
})

