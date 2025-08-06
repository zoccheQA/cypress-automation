class MyInfoPage {

    selectorsList() {
        const selectors = {

            firstNameField: "[name='firstName']",
            middleNameFielOptional: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
            licenceExpiryDateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            dropDownFiledsGenreal: ".oxd-select-text--active",
            saveButtonPersonalDetails: ".oxd-button--secondary",
            greenMessageSuccessfullyUpdate: ".oxd-toast",
            nationalityFieldDropDown:".oxd-form > :nth-child(5) > :nth-child(1) > :nth-child(1)",
            maritalStatusFieldDropDown: ".oxd-select-text--arrow[data-v-67d2aedf='']",
            marietalStatusContentSingle: ".oxd-select-dropdown > :nth-child(2) > span", 
            marietalStatusContentMaried:':nth-child(3) > span',
            genreFieldMale: ":nth-child(1) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input",
            genreFieldFemale:":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input"

    
        }
        return selectors
    }

    fillPersonalDetails(firstName, midleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameFielOptional).clear().type(midleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
 
    }
     fillEmployeeDetails(employeeID, otherID, driversLicenceN, licenseExpiryDate){
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeID)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherID)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenceN)
        cy.get(this.selectorsList().licenceExpiryDateField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()

    }
    saveForm(){
        cy.get(this.selectorsList().saveButtonPersonalDetails).eq(0).click()
        cy.get(this.selectorsList().greenMessageSuccessfullyUpdate)

    }
    fillStatus(dateBirth){
        cy.get(this.selectorsList().nationalityFieldDropDown).click()
        cy.get(this.selectorsList().maritalStatusFieldDropDown).eq(1).click().wait(2)
        cy.get(this.selectorsList().marietalStatusContentMaried).click()
        cy.get(this.selectorsList().genreFieldMale).click()
        cy.get(this.selectorsList().licenceExpiryDateField).eq(1).clear().type(dateBirth) //ok
        cy.get(this.selectorsList().dateCloseButton).click()
    }


}

export default MyInfoPage 