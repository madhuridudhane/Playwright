const { test, expect } = require('@playwright/test')
const exp = require('constants')

// getByAltText
// getByLabel
// getByPlaceholder
// getByRole
// getByTestId
// getByText
// getByTitle

 test("verify GetByAltText method in playwright",async({ page }) => {
     await page.goto('https://letcode.in/test#google_vignette')
     let ele = await page.getByAltText("letcode")
     await expect(ele).toBeVisible()
 })

 test("verify GetByLabel Method",async({ page }) => {
     await page.goto('https://letcode.in/test#google_vignette')
     await expect(page.getByLabel("main navigation")).toBeVisible()
     await expect(page.getByLabel("Advertisement").first()).toBeVisible()
 })

 test("verify getByPlaceholder method",async({ page }) => {
     await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
     await page.getByPlaceholder("First Name").fill("Madhuri")

 })

 test("verify getByRole method",async({ page }) => {
     await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
     await page.getByRole('checkbox', { name: "option-1" }).check()
     await page.waitForTimeout(3000)

 })

test("verify getByText method",async({ page }) => {
     await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
     await page.getByText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)").toBeVisible()

 })

test("verify getByTitle method",async({ page }) => {
     await page.goto('https://letcode.in/radio')
     await expect(page.getByTitle("Koushik Chatterjee")).toHaveText(" Koushik Chatterjee ").toBeVisible()

 })

// test("verify getByTitle method",async({ page }) => {
//      await page.goto('https://letcode.in/radio')
//      await expect(page.getByTitle('Advertisement').first()).toBeVisible()

//  })

test.only("verify getByTestId method",async({page})=>{
     await page.goto('https://www.atlassian.com/')
     await page.getByTestId("global-nav-search-icon").click()
     await expect(page.locator("#global-nav-search-input")).toBeVisible()
     await page.waitForTimeout(3000)
 })