import DashboardPage from "../PageObjects.js/dashboardPage"
import LoginPage from "../PageObjects.js/loginPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe("Testcases", () => {

    beforeEach(() => {
         cy.visit("")
    })

 it('Verify if user is able to login', function () {
    loginPage.checkField().should('be.visible')
     cy.wait(4000)
    loginPage.enterEmail().type('radhey') //enter email 
    loginPage.enterPassword().type('Radhey@123$#') //enter password
    loginPage.clickLoginButton().should('be.visible').click() //click on login button
     })

 
    it('Verify if user is able to reach settings page after clicking on settings page', function () {
        loginPage.checkField().should('be.visible')
        cy.wait(4000)
        loginPage.enterEmail().type('radhey') //enter email 
        loginPage.enterPassword().type('Radhey@123$#') //enter password
        loginPage.clickLoginButton().should('be.visible').click() //click on login button
        cy.wait(6000)
        dashboardPage.clickSettings().click({force:true}) //click on settings 
        cy.wait(6000)
       dashboardPage.verifyPageTitle().should('be.visible')//verify page title
     })

     it('Verify should navigate in plugin Advanced Ads', function () {
        loginPage.checkField().should('be.visible')
        cy.wait(4000)
        loginPage.enterEmail().type('radhey') //enter email 
        loginPage.enterPassword().type('Radhey@123$#') //enter password
        loginPage.clickLoginButton().should('be.visible').click() //click on login button
        cy.wait(4000)
        dashboardPage.clickAdvancedAds().click()
        dashboardPage.clickAds().click({force: true})
        dashboardPage.noadsFound().should('be.visible')
       
     })
     it('Verify user is able to signout', function () {
        loginPage.checkField().should('be.visible')
        cy.wait(4000)
        loginPage.enterEmail().type('radhey') //enter email 
        loginPage.enterPassword().type('Radhey@123$#') //enter password
        loginPage.clickLoginButton().should('be.visible').click() //click on login button
        cy.wait(4000)       
        dashboardPage.clickProfile().invoke('show')       
        dashboardPage.logoutButton().find('a').click({force: true})
    
     })
     
    
})