var {fillObj, typeObj, selectOptionObj} = require("../../../commonFunction/inputAction.js");
var{userName,passWord,loginButton} = require("../../locations/locations.js");
var {clickOnElement} = require("../../../commonFunction/clickAction.js");
var {adminObj, userManagement, job, qualifications, qaliNav, checkBoxLocation, pencilBoxLocation} = require("../adminPage/adminPageLocation.js");
var {checkBoxObj, radioButtonObj} = require("../../../commonFunction/checkBox.js");


var loginPage = async (page,username,password) => {
    await typeObj(page,"locator",userName,username);
    await typeObj(page,"locator",passWord,password);
    await page.waitForTimeout(7000);
    await clickOnElement(page,"locator", loginButton )
    await page.waitForTimeout(20000);

}

var adminPageTest = async (page) => {

    await clickOnElement(page,"locator", adminObj )
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", userManagement);
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", job);
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", qualifications);
    await page.waitForTimeout(5000);
    await page.getByText('Languages').click();
    await page.waitForTimeout(5000);

    await checkBoxObj(page, "locator", checkBoxLocation );
    await page.waitForTimeout(5000);

    await clickOnElement(page, "locator", pencilBoxLocation );
    await page.waitForTimeout(5000);
    await page.goBack();
}



module.exports = {loginPage, adminPageTest};