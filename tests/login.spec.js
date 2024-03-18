const { test, expect } = require('@playwright/test');

test("verify the login functionality with valid credentials", async ({ page }) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     await page.locator('input[name="username"]').fill('Admin')
     await page.locator('input[name="password"]').fill('admin123')
     await page.locator('button[type="submit"]').click()
     await page.waitForTimeout(4000)
     await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible()
     await expect(page.locator('img[class="oxd-userdropdown-img"]')).toBeVisible()
     await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard')

})

test("verify the login functionality with invalid credentials", async ({ page }) => {
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     await page.locator('input[name="username"]').fill('Admin')
     await page.locator('input[name="password"]').fill('admin12')
     await page.locator('button[type="submit"]').click()
     await page.waitForTimeout(4000)
     await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toBeVisible()
     await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText("Invalid credentials")
})