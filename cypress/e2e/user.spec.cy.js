import userData from '../fixtures/Users/usersData.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import SidebarPage from '../pages/sidebarPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import RecruitmentPage from '../pages/RecruitmentPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const sidebarPage = new SidebarPage()
const myInfoPage =  new MyInfoPage()
const recruitmentPage = new RecruitmentPage()

describe('Orange HRM Tests', () => {
  const selectorslist = {
  }

  it('Login - Success with Personal Details upadate', () => { //adicionar restante do formularii
    loginPage.accessLoginPage()
    loginPage.LoginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    sidebarPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.name({ middle: true }), chance.last())
    myInfoPage.fillEmployeeDetails('55555', '65', '999999', '1990-23-01')
    myInfoPage.fillStatus('1990-23-01')
    myInfoPage.saveForm()
  })
})

describe('Orange HRM Tests', () => {
  const selectorslist = {
  }

  it('Add new candidate', () => {
    loginPage.accessLoginPage()
    loginPage.LoginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    sidebarPage.accessRecruitment()
    recruitmentPage.accessRecruitmentAddCandidate(chance.first(), chance.name({ middle: true }), chance.last())
    recruitmentPage.fillCandidateDetails(chance.email(), chance.first(), chance.last())
    recruitmentPage.saveFormCandidate()
  })
})