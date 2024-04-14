const { test, expect } = require('@playwright/test')
const exp = require('constants')

test('Handle Simple Js Alert', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
     page.on('dialog', async simpleAlert => {
          await expect(simpleAlert.message()).toContain('I am a JS Alert')
          await expect(simpleAlert.type()).toContain('alert')
          await simpleAlert.accept()
     })
     await page.locator('button[onclick="jsAlert()"]').click()
     await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
     await page.waitForTimeout(3000)

})

test.only('Handle Confirm alert', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
     page.on('dialog', async confirmAlert => {
          await expect(confirmAlert.message()).toContain('I am a JS Confirm')
          await expect(confirmAlert.type()).toContain('confirm')
          //await confirmAlert.accept()
          //console.log(confirmAlert.message())
          //console.log(confirmAlert.type())
          confirmAlert.dismiss()

     })
     await page.locator('button[onclick="jsConfirm()"]').click()
     //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
     await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
     await page.waitForTimeout(4000)
})

test('Handle prompt-Alert',async({page})=>{
     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
     await page.on('dialog',async promptAlert=>{
          await expect(promptAlert.message()).toContain('I am a JS prompt')
          await expect(promptAlert.type()).toContain('prompt')
          promptAlert.accept('madhuri')
     })
     await page.locator('button[onclick="jsPrompt()"]').click()
     await expect(page.locator('#result')).toHaveText('You entered: madhuri')
})