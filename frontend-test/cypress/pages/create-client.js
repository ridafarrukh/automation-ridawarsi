///<reference types="cypress"/>

//elements

const viewbutton = '.blocks > :nth-child(2) > .btn'
const label = 'Clients'
const createbtn = 'h2 > .btn'
const label2 = 'New Client'
const nametextfield = ':nth-child(1) > input'
const emailtextfield = ':nth-child(2) > input'
const telfield = ':nth-child(3) > input'
const savebtn = '.blue'
const backbtn = ':nth-child(3) > .btn'
const select = ':nth-child(3) > .action'
const delet ='.menu > :nth-child(2)'


//functions
function createClient(cy, namn, email, telephone,){

    cy.get(viewbutton).click()
    cy.contains(label)
    //create client
    cy.get(createbtn).click()
    cy.contains(label2)
    //textfield
    cy.get(nametextfield).type(namn)
    cy.get(emailtextfield).type(email)
    cy.get(telfield).type(telephone)
    cy.get('.blue').click()
    cy.contains(label)
    //Delete client
    cy.get(select).click()
    cy.get(delet).click()
    

    cy.get(backbtn).click()

   

}

//exports
module.exports = {
    createClient
}







