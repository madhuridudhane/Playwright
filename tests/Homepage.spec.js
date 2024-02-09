const {test,expect} = require('@playwright/test')
test('HomepageTest',async({page})=>{
     await page.goto('https://demoblaze.com/')

     const pageTitle=page.title()
     console.log('page title is:',pageTitle)

     await expect(page).toHaveTitle('STORE')

     const pageURL=page.url()
     console.log('page URL is:',pageURL)

     await expect(page).toHaveURL('https://demoblaze.com/')
     await page.close()
})