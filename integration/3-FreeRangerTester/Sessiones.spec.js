describe("Sesiones y cookies",()=>{

    it('Sin sesion guardada',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').debug().type('SuperSecretPassword!')
        cy.get('.fa').contains('Login').click()
        cy.url().should('contain','/secure')
    })

    it('Con sesion guardada',()=>{
        cy.session('Tom', ()=>{
            cy.visit('https://the-internet.herokuapp.com/login')
            cy.get('#username').type('tomsmith')
            cy.get('#password').debug().type('SuperSecretPassword!')
            cy.get('.fa').contains('Login').click()
            cy.url().should('contain','/secure')
            cy.getCookies().should('have.length',5).then((cookies)=>{
                expect(cookies[0]).to.have.property('name','optimizelyPendingLogEvents')
            })
        })

    })
})