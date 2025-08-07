import userData from '../fixtures/Users/usersData.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage  from '../pages/dashboardPage.js'
import SidebarPage from '../pages/sidebarPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
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
    myInfoPage.fillPersonalDetails(chance.first(), chance.name({ middle: true }), chance.last())
    myInfoPage.fillEmployeeDetails('55555', '65', '999999', '1990-23-01')
    myInfoPage.fillStatus('1990-23-01')
    myInfoPage.saveForm()
  })
})


describe('Registro de novo usuário com sucesso', () => { // EXER. 1.3
  it('Deve registrar um novo usuário com informações válidas', () => {
    // Implemente os passos do caso de teste aqui
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => { // EXER. 1.4
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    // Implemente os passos do caso de teste aqui
  });
});
describe('Enviar dinheiro com saldo suficiente', () => { // EXER. 2.1
  it('Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
  });
});
describe('Enviar dinheiro com saldo insuficiente', () => {// EXER. 2.2
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    // Implemente os passos do caso de teste aqui
  });
});
describe('Visualizar histórico de transações com sucesso', () => { // EXER. 3.1
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    // Implemente os passos do caso de teste aqui
  });
});
describe('Tentar visualizar o histórico de transações sem transações anteriores', () => { // EXER. 3.2
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    // Implemente os passos do caso de teste aqui
  });
});