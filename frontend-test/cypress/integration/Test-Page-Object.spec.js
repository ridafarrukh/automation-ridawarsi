///<reference types="cypress"/>

import * as indexfunction from '../pages/indexPage' 
import * as dashboardfunction from '../pages/dashboardPage'
import * as navigationfunction from '../pages/navigatepages'
import * as createroomfunction from '../pages/create-room'
import * as createclientfunction from '../pages/create-client'
import * as createbillfunction from '../pages/create-bill'


//This is a test suite
describe ('Regression test suite',function(){

    beforeEach( ()=>{
        cy.visit('http://localhost:3000')
        indexfunction.CheckTitleOfIndex(cy)
    })
    
    // This is a 1 test case
    it('perform valid login and logout',function(){
        indexfunction.PerformValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' , 'Tester Hotel Overview')
        dashboardfunction.CheckTitleOfDashboardPage(cy)
        dashboardfunction.CheckUserName(cy)
        dashboardfunction.PerformLogout(cy, 'Login')
    })

    //This is a 2 test case

    it('navigation through the pages', function(){
        indexfunction.PerformValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' , 'Tester Hotel Overview')
        dashboardfunction.CheckTitleOfDashboardPage(cy)
        dashboardfunction.CheckUserName(cy)
        navigationfunction.navigateThroughRoomsPage(cy,'Rooms')
        navigationfunction.navigateThroughClientsPage(cy,'Clients')
        navigationfunction.navigateThroughBillsPage(cy,'Bills')
        navigationfunction.navigateThroughreservationPage(cy,'Reservations')
        dashboardfunction.PerformLogout(cy,'Login')
         

    })
    //This is a 3 test case
    it('create room page', function(){
        indexfunction.PerformValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' , 'Tester Hotel Overview')
        dashboardfunction.CheckTitleOfDashboardPage(cy)
        dashboardfunction.CheckUserName(cy)
        createroomfunction.createRoom(cy,'Single','12','1','1000','Balcony','Tester Hotel Overview')
        dashboardfunction.PerformLogout(cy,'Login')
         

    })
     //This is a 4 test case
     it('create client page', function(){
        indexfunction.PerformValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' , 'Tester Hotel Overview')
        dashboardfunction.CheckTitleOfDashboardPage(cy)
        dashboardfunction.CheckUserName(cy)
        createclientfunction.createClient(cy,'sana', 'sana@gmail.com', '07234535536')
        dashboardfunction.PerformLogout(cy,'Login')
         

    })
    //This is a 5 test case
    
    it('create bill page', function(){
        indexfunction.PerformValidLogin(cy, 'tester01' , 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c' , 'Tester Hotel Overview')
        dashboardfunction.CheckTitleOfDashboardPage(cy)
        dashboardfunction.CheckUserName(cy)
        createbillfunction.createBill(cy,'1000')
        dashboardfunction.PerformLogout(cy,'Login')
    })

    

    
    








})