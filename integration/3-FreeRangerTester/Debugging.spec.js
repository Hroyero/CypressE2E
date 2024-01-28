describe('Utilidades para debyggub con cypres',()=>{
/*
    it('cy.log',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.log('Escribe el username')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.log('Se da click en el boton login')
        cy.get('.fa').contains('Login').click()
        cy.url().should('contain','/login')
    })
*/
/*
    it('Ejemplo de cy,pause',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith').pause()
        cy.get('#password').pause().type('SuperSecretPassword!')
        cy.get('.fa').contains('Login').click()
        cy.url().should('contain','/login').pause()
    })*/

    it('Ejemplo de cy,debug',()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').debug().type('SuperSecretPassword!')
        cy.get('.fa').contains('Login').click()
        cy.url().should('contain','/secure')
    })
})