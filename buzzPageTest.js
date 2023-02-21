var {buzzObj, recentPost, mostLikedPost, mostCommentedPost, onYourMind, clickOnPost, userObj, logoutObj } = require("../buzzPage/buzzPageLocator.js");
var {clickOnElement} = require("../../../commonFunction/clickAction.js");
var {typeObj} = require("../../../commonFunction/inputAction.js");

var buzzPageTest = async (page, msg) => {
    await clickOnElement(page,"locator", buzzObj )
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", recentPost);
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", mostCommentedPost);
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", mostLikedPost);
    await page.waitForTimeout(5000);    
    await clickOnElement(page, "locator", onYourMind);
    await page.waitForTimeout(5000);

    await typeObj(page,"locator",onYourMind, msg );

    await clickOnElement(page, "locator", clickOnPost);
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", recentPost);
    await page.waitForTimeout(5000);

}


var logout = async (page) => {

    await clickOnElement(page, "locator", userObj);
    await page.waitForTimeout(5000);
    await clickOnElement(page, "locator", logoutObj);
    await page.waitForTimeout(5000);


}

module.exports = {buzzPageTest, logout};