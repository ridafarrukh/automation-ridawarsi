///<reference types="cypress"/>

//elements
const billviewbtn = ':nth-child(3) > .btn'
const label = 'Bills'
const createbillbtn = 'h2 > .btn'
const formlabel ='New Bill'
const valuefield ='input'
const savebtn = '.blue'
const backbtn = ':nth-child(3) > .btn'


//functions
function createBill(cy, value){

    cy.get(billviewbtn).click()
    cy.contains(label)
    // create room button
    cy.get(createbillbtn).click()
    cy.contains(formlabel)
    // form
    cy.get(valuefield).type(value)
    cy.get(savebtn).click()
    cy.contains(label)
    cy.get(backbtn).click()

}

//exports
module.exports = {
    createBill
}






