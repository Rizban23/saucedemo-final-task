const LoginPage = require('../pageobjects/login.page')
const InventoryPage = require('../pageobjects/inventory.page')
const CartPage = require('../pageobjects/cart.page')
const CheckoutPage = require('../pageobjects/checkout.page')

describe('Checkout Negative Test', async()=>{
    beforeEach(async ()=>{
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce')
    await InventoryPage.waitForPageLoaded()
    })

    it('should show error when postal code is empty', async()=>{
        await InventoryPage.addFirstItemToCart();
        await InventoryPage.openCart();
        await CartPage.clickCheckout()

        await CheckoutPage.fillCheckoutInfo('Test', 'User');
        await CheckoutPage.continue();

        await expect(CheckoutPage.errorMessage).toBeExisting();
        await expect(CheckoutPage.errorMessage).toHaveText(expect.stringContaining('Postal Code is required'))
    })
})
