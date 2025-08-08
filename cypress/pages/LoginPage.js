class LoginPage{
     selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            WorngCredentialAlertRequiredPassword:'.oxd-input-group > .oxd-text',
            worngCredentialAlertInvalidCredentials: '.oxd-alert-content > .oxd-text',

        }

        return selectors
    } 

     accessLoginPage() {
        cy.visit('/auth/login')
    }

    LoginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
    LoginWithIncorectUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().worngCredentialAlertInvalidCredentials)
    }
    LoginWithIncorectPassword(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().worngCredentialAlertInvalidCredentials)  
    }
    LoginWithoutPassword(username){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().WorngCredentialAlertRequiredPassword) 
    }
}

export default LoginPage

