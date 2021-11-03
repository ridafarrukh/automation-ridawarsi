///<reference types="cypress"/>
 
//elements

const roomsview = ':nth-child(1) > .btn'
const label ='Rooms'
const createroom = 'h2 > .btn'
const label2 = 'New Room'
const categorytextfield = ':nth-child(1) > select'
const numbertestfield = ':nth-child(2) > input'
const floortextfield = ':nth-child(3) > input'

const pricetextfield = ':nth-child(5) > input'
const featurestextfield = ':nth-child(6) > select'
const savebutton = '.blue'
const backbtn = ':nth-child(3) > .btn'


//functions
function createRoom(cy, category, number, floor, price, feature){
        // room view button
        cy.get(roomsview).click()
        cy.contains(label)
        // create room button
        cy.get(createroom).click()
        cy.contains(label2)
        // form
        cy.get(categorytextfield).select(category)
        cy.get(numbertestfield).type(number)
        cy.get(floortextfield).type(floor)
        
        cy.get(pricetextfield).type(price)
        cy.get(featurestextfield).select(feature)
        cy.get(savebutton).click()
        cy.contains(label)
        cy.get(backbtn).click()
        

    }       

    //exports
    module.exports= {
        createRoom
    }



        


