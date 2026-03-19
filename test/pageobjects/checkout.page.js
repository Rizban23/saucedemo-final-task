const BasePage = require('./base.page')

class CheckoutPage extends BasePage{
    get firstNameInput(){
        return $('#first-name')
    }

    get lastnameInput(){
        return $('#last-name')
    }

    get postalCodeInput(){
        return $('#postal-code')
    }

    get continueButton(){
        return $('#continue')
    }

    get errorMessage(){
        return $('h3[data-test="error"]')
    }

    async fillCheckoutInfo(firstName,lastName,postalCode){
        if(firstName !== undefined){
        await this.type(this.firstNameInput,firstName)
    }
       if(lastName !== undefined){
        await this.type(this.lastnameInput,lastName)
       }

       if(postalCode !== undefined){
        await this.type(this.postalCodeInput,postalCode)
       }
}

     async continue(){
        await this.click(this.continueButton)
     }
     async getErrorText(){
        return await this.getText(this.errorMessage)
     }
}

module.exports = new CheckoutPage();