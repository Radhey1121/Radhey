
class LoginPage{
checkField(){
    return cy.contains('Username or Email Address')
}
enterEmail(){
    return cy.get('#user_login')
}
enterPassword(){
    return cy.get('#user_pass')
}
clickLoginButton(){
    return cy.get('#wp-submit')
}


}
export default LoginPage