describe('Loguear - Basic Auth y auth con form', function(){
    it('Sin loguear',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth")
        cy.get('p').should('include.text','Congratulations')
    })

    it('Loguea usando auth de Cypress',()=>{
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth:{
                username: 'admin',
                password: 'admin'
            }
        })
        cy.get('p').should('include.text','Congratulations')
    })

    it('Loguea con las credenciales en la url del visit',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
        cy.get('p').should('include.text','Congratulations')
    })

    it('Hago login en un form, usando un request del tipo POST',()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        cy.request({
            method: 'POST',
            url:'/authenticate',
            form:true,
            body:{
                username:'tomsmith',
                password:'SuperSecretPassword!'
            }
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text','Welcome to the Secure Area')
    })
})