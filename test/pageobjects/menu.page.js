const BasePage = require('./base.page')

class MenuPage extends BasePage{
    get resetAppStateLink(){
        return $('#reset_sidebar_link')
    }
    get logoutLink(){
        return $('#logout_sidebar_link')
    }
    get menuWrap(){
        return $('.bm-menu-wrap')
    }
    
    async waitForMenuOpen(){
        await this.menuWrap.waitForDisplayed({timeout: 10000})
    }

    async resetAppState(){
        await this.waitForMenuOpen();
        await this.click(this.resetAppStateLink)
    }

    async logout(){
        await this.click(this.logoutLink)
    }
} 

module.exports =new MenuPage();