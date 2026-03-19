const BasePage = require('./base.page')

class CartPage extends BasePage{
    get checkoutButton(){
        return $('#checkout')
    }

    async clickCheckout(){
        await this.click(this.checkoutButton)
    }
}

module.exports = new CartPage();