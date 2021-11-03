///<reference types="cypress"/>

//elements
const roomsview = ':nth-child(1) > .btn'
const clientsview = '.blocks > :nth-child(2) > .btn'
const billsview = ':nth-child(3) > .btn'
const reservationsview= ':nth-child(4) > .btn'
const backbutton = ':nth-child(3) > .btn'
const formlabel = 'Tester Hotel Overview'



//functions

function navigateThroughRoomsPage(cy,contentToConform){
    cy.get(roomsview).click()
    cy.contains(contentToConform)
    cy.get(backbutton).click()
    cy.contains(formlabel)
    
}
function navigateThroughClientsPage(cy,contentToConform){

    cy.get(clientsview).click()
    cy.contains(contentToConform)
    cy.get(backbutton).click()
    cy.contains(formlabel)

}
function navigateThroughBillsPage(cy,contentToConform){

    cy.get(billsview).click()
    cy.contains(contentToConform)
    cy.get(backbutton).click()
    cy.contains(formlabel)

}

function navigateThroughreservationPage(cy,contentToConform){

    cy.get(reservationsview).click()
    cy.contains(contentToConform)
    cy.get(backbutton).click()
    cy.contains(formlabel)

}


//export
module.exports = {
    navigateThroughRoomsPage,
    navigateThroughClientsPage,
    navigateThroughBillsPage,
    navigateThroughreservationPage
}
