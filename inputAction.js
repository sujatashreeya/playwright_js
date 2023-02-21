var getLocators = require("../commonFunction/getLocators.js");

module.exports = {
  async fillObj (page, locatorType, locator, value) {

    var inputObj = await getLocators.getLocator(page, locatorType, locator);
    await inputObj.fill(value);
    },

  async typeObj (page, findBy, locator, string, locatorType) {

    var inputObj = await getLocators.getLocator(page,findBy,locator,locatorType );
    await inputObj.type(string); //type one by one character
   },


  async clearObj (locatorType, locator, value) {

    var inputObj = await getLocators.getLocator(locatorType, locator);
    await inputObj.fill(value).clear();
    },

  async countObj (page, locatorType, locator) {
    
    var inputObj = await getLocators.getLocator(page, locatorType, locator);
    await inputObj.count(0); //number

  },


  async selectOptionObj (page, locatorType, locator, option ){ //dropdown

    var inputObj = await getLocators.getLocator(page, locatorType, locator);
    await inputObj.selectOption(option);

  },

  async pressObj(page, locatorType, locator, keyValue){

    var inputObj = await getLocators.getLocator(page, locatorType, locator);
    await inputObj.press(keyValue);     //'Enter','Control+ArrowRight', Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape, ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,ArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc. 

  }




}    


  