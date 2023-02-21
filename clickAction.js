const getLocators = require("./getLocators");

module.exports = {
  async clickOnElement (page, locatorType, locator) {

    var createFreeObj = await getLocators.getLocator(page, locatorType, locator);
    await createFreeObj.click({ force: true });
   },

  async dblClickOnElement (locatorType, locator) {

    var createFreeObj = await getLocators.getLocator(locatorType, locator);
    createFreeObj.dblclick();
   },

   async hoverOnElement (locatorType, locator) {

    var createFreeObj = await getLocators.getLocator(locatorType, locator);
    createFreeObj.hover();
   }  
}  