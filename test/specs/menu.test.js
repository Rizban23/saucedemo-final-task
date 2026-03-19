const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const MenuPage = require('../pageobjects/menu.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('Menu / Logout Flow', ()=>{
    beforeEach(async() =>{
        await LoginPage.open();
    });

    it('should show handle perfomance glitch user,reset app state and logout', async()=>{
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await inventoryPage.waitForPageLoaded();

        await expect(InventoryPage.inventoryContainer).toBeDisplayed();

        await InventoryPage.openBurgerMenu();
        await MenuPage.resetAppState();
        await MenuPage.logout();

        await expect(LoginPage.usernameInput).toBeDisplayed()
    })
})