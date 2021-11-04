///<reference types="cypress"/>

// This is a test suite
describe('Hotel application test suite', function(){

    // This is a 1 test case
    

    it('perform valid login' , function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include','Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        cy.get('.btn').click()
        cy.contains("Tester Hotel Overview")
        cy.get('.username').should("contain", "Welcome tester01!")
        /*
        cy.get('.blocks > :nth-child(1)').should("contain","Rooms")
        cy.get('.blocks > :nth-child(2)').should("contain","Clients")
        cy.get('.blocks > :nth-child(3)').should("contain","Bills")
        cy.get(':nth-child(4)').should("contain","Reservations")
        */
        cy.get('.user > .btn').click()
        cy.contains('Login')
   
    })
    // This is a 2 test case
       it('navigate through the pages',function(){

           
           cy.contains('Login')
           cy.get(':nth-child(1) > input').type("tester01")
           cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
           cy.get('.btn').click()
           cy.contains("Tester Hotel Overview")

           cy.get(':nth-child(1) > .btn').click()
           cy.contains('Rooms')
           cy.get(':nth-child(3) > .btn').click()
           cy.contains('Tester Hotel Overview')

           cy.get('.blocks > :nth-child(2) > .btn').click()
           cy.contains('Clients')
           cy.get(':nth-child(3) > .btn').click()
           cy.contains('Tester Hotel Overview')

           
           cy.get(':nth-child(3) > .btn').click()
           cy.contains('Bills')
           cy.get(':nth-child(3) > .btn').click()
           cy.contains('Tester Hotel Overview')

           cy.get(':nth-child(4) > .btn').click()
           cy.contains('Reservations')
           cy.get(':nth-child(3) > .btn').click()
           cy.contains('Tester Hotel Overview')

           cy.get('.user > .btn').click()
           cy.contains('Login')

        }) 



    
    //This is a 3 test case
    it('Create rooms',function(){
        cy.get(':nth-child(1) > input').type("tester01")
        cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
        cy.get('.btn').click()
        cy.contains("Rooms")
        //view button
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        //create button
        cy.get('h2 > .btn').click()
        cy.contains("New Room")
        cy.get(':nth-child(1) > select').select("Single")
        cy.get(':nth-child(2) > input').type("100")
        cy.get(':nth-child(3) > input').type("2")
        cy.get('.checkbox')
        cy.get(':nth-child(5) > input').type("1200")
        cy.get(':nth-child(6) > select').select("Sea View")
        cy.get('.blue').click()
        cy.get('h2 > div').should("contain","Rooms")
        cy.get(':nth-child(3) > .btn').click()
        cy.contains("Tester Hotel Overview")
        cy.get('.user > .btn').click()
        cy.contains('Login')
        
    })
    
        //This is a 4 test case
        it('Create Client',function(){
            cy.get(':nth-child(1) > input').type("tester01")
            cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
            cy.get('.btn').click()
            cy.contains("Clients")
            //view button
            cy.get('.blocks > :nth-child(2) > .btn').click()
            cy.contains("Clients")
            //create client
            cy.get('h2 > .btn').click()
            cy.contains("New Client")
            //textfield
            cy.get(':nth-child(1) > input').type("Sara")
            cy.get(':nth-child(2) > input').type("sara@gmail.com")
            cy.get(':nth-child(3) > input').type("073 5647737")
            cy.get('.blue').click()
            cy.contains("Sara")
            cy.get(':nth-child(3) > .action').click()
            cy.get('.menu > :nth-child(2)').click()
            cy.get(':nth-child(3) > .btn').click()
            cy.contains("Tester Hotel Overview")
            cy.get('.user > .btn').click()
            cy.contains('Login')

        })

        
        //This is a 5 test case
            it('Create Bills', function(){
                cy.get(':nth-child(1) > input').type("tester01")
                cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
                cy.get('.btn').click()
                cy.contains("Bills")
                cy.get(':nth-child(3) > .btn').click()
                cy.contains("Bills")
                cy.get('h2 > .btn').click()
                cy.get('h2 > div').should("have.text","New Bill")
                cy.get('input').type("1000")
                cy.get('.checkbox')
                cy.get('.blue').click()
                cy.contains("Bills")
                cy.get(':nth-child(3) > .btn').click()
                cy.contains("Tester Hotel Overview")
                cy.get(':nth-child(3) > :nth-child(2)').should("contain","Total")
                cy.get('.user > .btn').click()
                cy.contains('Login')
        
            })
            /*
           //this is a 6 test case

           it("Create Reservations", function(){
            cy.get(':nth-child(1) > input').type("tester01")
            cy.get(':nth-child(2) > input').type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
            cy.get('.btn').click()
            cy.contains("Reservations")
            cy.get(':nth-child(4) > :nth-child(2)').should("contain","Total")
            cy.get(':nth-child(4) > .btn').click()
            cy.contains("Reservations")
            cy.get('h2 > .btn').click()
            cy.contains("New Reservation")

            cy.get('[href="/reservations"]').click()
            
            cy.contains("Reservations")
            
            cy.get(':nth-child(3) > .btn').click()
            cy.contains("Tester Hotel Overview")
            
           
           cy.get(':nth-child(4) > :nth-child(2)').should("contain","Total")
            cy.get('.user > .btn').click()
            cy.contains('Login')
            
            
        })
        */
    })
            
            
           

















            
            
            

    
    
            
    
        

    

    
   
       
    
    
    

    







    
    

  