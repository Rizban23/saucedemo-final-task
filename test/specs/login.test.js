const LoginPage = require('../pageobjects/login.page')

describe('Login, Negative Tests', ()=>{
    beforeEach(async ()=>{
        await LoginPage.open()
    })


it ('should show error when login with empty username and password', async()=>{
    await LoginPage.login();

    await expect(LoginPage.errorMessage).toBeExisting();
    await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining('Username is required'))
})

it('should show error when login with username only', async()=>{
    await LoginPage.login('standard_user');

    await expect(LoginPage.errorMessage).toBeExisting()

    await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining('Password is required'))
})
})