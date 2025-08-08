class sidebarPage{
     selectorsList() {
        const selectors = {
             myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
             recruitmentButtonSidebar: "[href='/web/index.php/recruitment/viewRecruitmentModule']"
        }

        return selectors
    } 

     accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
     }
      accessRecruitment() {
        cy.get(this.selectorsList().recruitmentButtonSidebar).click()
     }

    }

export default sidebarPage