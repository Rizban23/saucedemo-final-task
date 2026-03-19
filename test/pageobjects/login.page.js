const BasePage = require('./base.page')

class LoginPage extends BasePage{
    get usernameInput(){
        return  $('#user-name')
    }

    get passwordInput(){
        return $('#password')
    }

    get loginButton(){
        return $('#login-button')
    }

    get errorMessage(){
        return $('h3[data-test="error"]')
    }

    async open(){
        await super.open('/')
    }

    async login(username,password){
         await this.usernameInput.waitForDisplayed({ timeout: 10000 })
        if(username !== undefined){
          await this.type(this.usernameInput,username)
        }
        if(password  !== undefined){
            await this.type(this.passwordInput,password)
        }
        await this.click(this.loginButton)
    }

    async getErrorText(){
        return  this.getText(this.errorMessage)
    }
}

module.exports = new LoginPage();