import userData from '../fixtures/Users/usersData.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import SidebarPage from '../pages/sidebarPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const sidebarPage = new SidebarPage()

const { selectLimit } = require("async")
describe('Orange HRM Tests', () => {
  const selectorslist = {
    firstNameField: "[name='firstName']",
    middleNameFielOptional: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    licenceExpiryDateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    dropDownFiledsGenreal: ".oxd-select-text--active",
    saveButtonPersonalDetails: ".oxd-button--secondary",
    greenMessageSuccessfullyUpdate: ".oxd-toast"
  }

  it.only('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.LoginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    sidebarPage.accessMyInfo()
  })


it('User info Update - Success', () => {
  cy.visit('/auth/login')
  cy.get(selectorslist.usernameField).type (userData.userSuccess.username)
  cy.get(selectorslist.passwordField).type (userData.userSuccess.password)
  cy.get(selectorslist.loginButton).click ()
  cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  cy.get(selectorslist.dasboardGrid).should('be.visible')
  cy.visit('/pim/viewMyDetails')
  cy.get(selectorslist.myInfoButton).click()
  cy.get(".orangehrm-upgrade-layout")
  cy.get(selectorslist.firstNameField).clear().type('Maike')
  cy.get(selectorslist.middleNameFielOptional).clear()
  cy.get(selectorslist.lastNameField).clear().type('Jordam')
  cy.get(selectorslist.genericField).eq(4).clear().type('44444')
  cy.get(selectorslist.genericField).eq(5).clear().type('99')
  cy.get(selectorslist.genericField).eq(6).clear().type('Dl12345')
  cy.get(selectorslist.licenceExpiryDateField).eq(0).clear().type('2025-09-08')
  cy.get(selectorslist.dateCloseButton).click()
  cy.get('.oxd-form > :nth-child(5) > :nth-child(1) > :nth-child(1)').click()
  cy.get('.oxd-select-dropdown > :nth-child(9) > span').click()
  cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .oxd-input-group').click()
  cy.get('.oxd-select-dropdown > :nth-child(3)').click()
  cy.get(".oxd-input-field-bottom-space [type='radio'][value='2']")
  cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click()
  cy.get(selectorslist.licenceExpiryDateField).eq(1).clear().type('1995-01-02')
  cy.get(selectorslist.dateCloseButton).click()
  cy.get(selectorslist.saveButtonPersonalDetails).eq(0).click()
  cy.get(selectorslist.greenMessageSuccessfullyUpdate)
})
})

 // it('Login - Fail - Incorect User name', () => {
  //  cy.visit('/auth/login')
   // cy.get(selectorslist.usernameField).type (userData.userFail.username)
   // cy.get(selectorslist.passwordField).type (userData.userSuccess.password)
   // cy.get(selectorslist.loginButton).click ()
   // cy.get(selectorslist.worngCredentialAlertInvalidCredentials)
 // })
//  it('Login - Fail - Incorect Password', () => {
    //cy.visit('/auth/login')
   // cy.get(selectorslist.usernameField).type (userData.userSuccess.username)
  //  cy.get(selectorslist.passwordField).type (userData.userFail.password)
  //  cy.get(selectorslist.loginButton).click ()
  //  cy.get(selectorslist.worngCredentialAlertInvalidCredentials)
 // })
 // it('Login - Fail - Password not Added', () => {
   // cy.visit('/auth/login')
   // cy.get(selectorslist.usernameField).type (userData.userSuccess.username)
  //  cy.get(selectorslist.loginButton).click ()
  //  cy.get(selectorslist.WorngCredentialAlertRequiredPassword)


//})