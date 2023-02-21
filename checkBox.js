const getLocators = require("./getLocators");

module.exports={
   async checkBoxObj (page, locatorType, locator) {

    var checkBox = await getLocators.getLocator(page, locatorType, locator);
    await checkBox.check();
   },
   

   async radioButtonObj (page, locatorType, locator) {

    var radioButton = await getLocators.getLocator(page, locatorType, locator);
    await radioButton.clcik();
   }

}  

   