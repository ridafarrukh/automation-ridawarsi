///<reference types="cypress"/>

//elements
const viewbtn = ':nth-child(4) > .btn'
const label = 'Reservations'
const reservationsbtn = 'h2 > .btn'
const formlabel = 'New Reservation'
const backbutton ='[href="/reservations"]'
const backbtn =':nth-child(3) > .btn'
const dashboardlabel = 'Tester Hotel Overview'

//functions
function navigationTOReservation(cy){

    cy.get(viewbtn).click()
    cy.contains(label)
    cy.get(reservationsbtn).click()
    cy.contains(formlabel)

    cy.get(backbutton).click()
    
    cy.contains(label)
    
    cy.get(backbtn).click()
    cy.wait(1000)
    cy.contains(dashboardlabel)
    
    
    

}



//exports
module.exports = {
    navigationTOReservation
}