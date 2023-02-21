const getLocators = require("./getLocators")

module.exports = {
  async checkObj (locatorType, locator){
     var checkElement = await getLocators.getLocator(locatorType, locator);
     expect(checkElement).toBeChecked(); //boolean

   },

  async disableObj (locatorType, locator){
    var disableElement = await getLocators.getLocator(locatorType, locator);
    expect(disableElement).toBeDisabled();

  },

  async editableObj (locatorType, locator){
    var editableElement = await getLocators.getLocator(locatorType, locator);
    expect(editableElement).toBeEditable(); //boolean

  }

}  