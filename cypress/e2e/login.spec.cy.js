import userData from '../fixtures/Users/usersData.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import SidebarPage from '../pages/sidebarPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const sidebarPage = new SidebarPage()
const myInfoPage =  new MyInfoPage()

describe('Orange HRM Tests', () => {
  const selectorslist = {
  }

  it('Login - Success with Personal Details upadate', () => {
    loginPage.accessLoginPage()
    loginPage.LoginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    sidebarPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('Miguel', 'Antonio', 'Cruz')
    myInfoPage.fillEmployeeDetails('55555', '65', '999999', '1990-23-01')
    myInfoPage.fillStatus('1990-13-01')
    myInfoPage.saveForm()
  })

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
