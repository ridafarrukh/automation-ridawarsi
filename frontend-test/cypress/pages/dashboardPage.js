///<reference types="cypress"/>

//elements
const titleofdashboardpage =  'Testers Hotel'
const conformusername = '.username'
const logoutbutton = '.user > .btn'

//functions
function CheckTitleOfDashboardPage(cy){
    cy.title().should('eq',titleofdashboardpage)
}

function CheckUserName(cy){
    cy.get(conformusername).should("contain", "Welcome tester01!")
}

function PerformLogout(cy, contentToConform){
    cy.get(logoutbutton).click()
    cy.contains(contentToConform)

}

//export
module.exports = {
    CheckTitleOfDashboardPage,
    CheckUserName,
    PerformLogout
}