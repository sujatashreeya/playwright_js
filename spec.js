const { test, expect } = require("@playwright/test");
var {loginPage, adminPageTest} = require("../pages/adminPage/adminPageTest.js");
var {julCalculator} =  require("../pages/juliemrCalculator/juliCalculator.js");
var {buzzPageTest, logout} = require("../pages/buzzPage/buzzPageTest.js");

test.beforeAll(async () => {
    console.log('Before all test Blocks');
  });
  

  test.afterAll(async () => {
    console.log('After all the tests');
    
    
  });

  test.afterEach(async ({page}) => {
    console.log('After all the tests');
    
    await logout(page);
    await page.waitForTimeout(5000);
  });



  test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
    await loginPage(page,'Admin','admin123');

    console.log('Login Page, Before Each test Blocks');

  });  

test.describe('only focused group', () => {
test('Test the Admin Page', async ({ page }) => {
    
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // await expect(page).toHaveTitle(/OrangeHRM/);
    // await loginPage(page,'Admin','admin123');

    await adminPageTest(page);
    await page.waitForTimeout(5000);

    
  }); 

});

test('Test the Buzz Page Details', async ({ page }) => {
    await buzzPageTest(page, 'hi, there ! how are you!!');
    await page.waitForTimeout(5000);

    // await logout(page);
    // await page.waitForTimeout(5000);
  }); 



//   test("Test on Juliemr calculator", async({page}) => {

//     await page.goto("https://juliemr.github.io/protractor-demo/");
//     await page.waitForTimeout(5000);
//     await julCalculator(page, '400', '40', "DIVISION");
//     // await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
//     // var a= await page.locator('xpath=//*[@name="username"]');
//     // await a.type('Admin');

    
// });

 