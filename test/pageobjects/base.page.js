class BasePage{
    async open(path){
        await browser.url(path) 
    }

    async click(element){
        await element.waitForClickable({timeout: 10000});
        await element.click()
    }

    async type(element,value){
        await element.waitForDisplayed({timeout: 10000})
        await element.setValue(value)
    }

    async getText(element){
        await element.waitForDisplayed({timeout: 10000});
        return await element.getText()
    }
}
module.exports = BasePage
