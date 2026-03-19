const BasePage = require('./base.page')

class InventoryPage extends BasePage{
    get inventoryContainer(){
        return $('.inventory_list')
    }

    get cartLink(){
        return $('.shopping_cart_link')
    }

    get burgerMenuButton(){
        return $('#react-burger-menu-btn')
    }

    get firstAddToCartButton(){
        return $('button[id^="add-to-cart"]')
    }

    async waitForPageLoaded(){
        await this.inventoryContainer.waitForDisplayed({timeout: 15000})
    }

    async addFirstItemToCart(){
        await this.click(this.firstAddToCartButton)
    }

    async openCart(){
        await this.click(this.cartLink)
    }

    async openBurgerMenu(){
        await this.click(this.burgerMenuButton)
    }
}

module.exports = new InventoryPage();