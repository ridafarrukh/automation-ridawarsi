///<reference types="cypress"/>

//elements
const titleofindexpage = 'Testers Hotel'
const usernametextfield = ':nth-child(1) > input'
const passwordtextfield = ':nth-child(2) > input'
const loginbutton = '.btn'
const formlabel = 'Login'


//actions / functions
function CheckTitleOfIndex(cy){
    cy.title().should('eq',titleofindexpage)
}
function PerformValidLogin(cy, username, password, contentToConform ){
    cy.contains(formlabel)
    cy.get(usernametextfield).type(username)
    cy.get(passwordtextfield).type(password)
    cy.get(loginbutton).click()
    cy.contains(contentToConform)
}

//exports

module.exports = {
    CheckTitleOfIndex,
    PerformValidLogin
}



