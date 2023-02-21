module.exports = {
    
    async getLocator(page, findBy, locatorObj,locatorType){
        var ele;
        switch(findBy){
            case "byRole":
                ele = await page.getByRole(locatorType,locatorObj);
                return ele;
            case "byLabel":
                ele = await page.getByLabel(locatorObj);
                return ele;    
            case "byText":
                ele = await page.getByText(locatorObj);
                return ele; 
            case "byTitle":
                ele = await page.getByTitle(locatorObj);
                return ele; 
            case "byAltText":
                ele = await page.getByAltText(locatorObj);
                return ele;
            case "byTestId":
                ele = await page.getByTestId(locatorObj);
                return ele;
            case "locator":
                ele = await page.locator(locatorObj);
                return ele;   
            case "byPlaceholder":
                ele = await page.getByPlaceholder(locatorObj);
                return ele;       
              
                                
        }
    },


    async getAllLocator(locatorType, locator){
        var ele;
        
        switch(locatorType){
            case "byRole":
                ele = await page.getByRole(locator).all();
                return ele;
            case "byLabel":
                ele = await page.getByLabel(locator).all();
                return ele;    
            case "byText":
                ele = await page.getByText(locator).all();
                return ele; 
            case "byTitle":
                ele = await page.getByTitle(locator).all();
                return ele; 
            case "byAltText":
                ele = await page.getByAltText(locator).all();
                return ele;
            case "byTestId":
                ele = await page.getByTestId(locator).all();
                return ele;
            case "locator":
                ele = await page.locator(locator).all();
                return ele;   
            case "byPlaceholder":
                ele = await page.getByPlaceholder(locator).all();
                return ele;       
                                
        }
    },

    async getAllChildrenLocator(parentObj, locatorType, locator){
        var ele;
        var parentObj = page.getAllLocator();
        switch(locatorType){
            case "byRole":
                ele = await parentObj.getByRole(locator).all();
                return ele;
            case "byLabel":
                ele = await parentObj.getByLabel(locator).all();
                return ele;    
            case "byText":
                ele = await parentObj.getByText(locator).all();
                return ele; 
            case "byTitle":
                ele = await parentObj.getByTitle(locator).all();
                return ele; 
            case "byAltText":
                ele = await parentObj.getByAltText(locator).all();
                return ele;
            case "byTestId":
                ele = await parentObj.getByTestId(locator).all();
                return ele;
            case "locator":
                ele = await parentObj.locator(locator).all();
                return ele;   
            case "byPlaceholder":
                ele = await parentObj.getByPlaceholder(locator).all();
                return ele;       
              
                                
        }
    },



}