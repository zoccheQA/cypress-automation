import userData from '../fixtures/Users/usersData.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Logins - Orange HRM Tests', () => {
 
 it.only('Login - Success', () => {
  loginPage.accessLoginPage()
  loginPage.LoginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  dashboardPage.checkDashboardPage()
  })

  it('Login - Fail - Incorect User name', () => {
  loginPage.accessLoginPage()
  loginPage.LoginWithIncorectUser(userData.userFail.username, userData.userSuccess.password)
  })

  it('Login - Fail - Incorect Password', () => {
  loginPage.accessLoginPage()
  loginPage.LoginWithIncorectPassword(userData.userSuccess.username, userData.userFail.password)
  })

  it('Login - Fail - Password not Added', () => {
  loginPage.accessLoginPage()
  loginPage.LoginWithoutPassword(userData.userSuccess.username)
  })

})