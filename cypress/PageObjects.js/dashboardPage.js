
class DashboardPage {

clickSettings(){
    return cy.get('#menu-settings > .wp-has-submenu > .wp-menu-name')
}
verifyPageTitle(){
    return cy.get('#submit')
}
clickAdvancedAds(){
    return cy.contains('Advanced Ads')
}
clickAds(){
    return cy.get('#toplevel_page_advanced-ads > .wp-submenu > :nth-child(3) > a')
}
clickPageTitle(){
    return cy.contains('clickAdvancedAds')
}
noadsFound(){
    return cy.contains('No Ads found')
}
clickProfile(){
    return cy.get('#wp-admin-bar-my-account > [aria-haspopup="true"]')
   
}
logoutButton(){
    return cy.get('#wp-admin-bar-logout')
}

}
export default DashboardPage