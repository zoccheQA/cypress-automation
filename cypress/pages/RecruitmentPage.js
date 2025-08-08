class recruitmentPage {
    selectorsList() {
        const selectors = {
             addButton: ".oxd-button--secondary[type='button']",
             resumeField: ".oxd-file-div",
             emailField: ":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input",
             firstNameField: ".orangehrm-firstname",
             lastNameField: ".orangehrm-lastname",
             saveButton: ".oxd-button--secondary",
             recruitmentSection: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
             sucessUpdateMessage: "#oxd-toaster_1"

        }
        return selectors
    }
    accessRecruitmentAddCandidate() {
        cy.get(this.selectorsList().recruitmentSection).click()
        cy.get(this.selectorsList().addButton).click()
        }

    fillCandidateDetails(email, name, lastName) {
         cy.get(this.selectorsList().resumeField).wait(1000)
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().firstNameField).type(name)
        cy.get(this.selectorsList().lastNameField).type(lastName)
    }

    saveFormCandidate(){
        cy.get(this.selectorsList().saveButton).click()
        cy.get(this.selectorsList().sucessUpdateMessage)
    }
}
export default recruitmentPage