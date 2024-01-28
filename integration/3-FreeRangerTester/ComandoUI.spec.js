describe("Pruebas sobre UI", ()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/")
    })
/*
    it("Ejemplo de click",()=>{
        cy.contains('Add/Remove Elements').click()
        cy.get('button').click()
        cy.get('.added-manually').click()
    })*/
/*
    it("Ejemplo de escrutyra",()=>{
        cy.contains('Form Authentication').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').debug().type('SuperSecretPassword!')
        cy.get('.fa').contains('Login').click()
 
    })*/
    /
    /*
    it("Ejemplo de checkbox",()=>{
        cy.contains('Checkboxes').click()
        cy.get('#checkboxes > :nth-child(1)').check()
        cy.get('#checkboxes > :nth-child(3)').uncheck()
 
    })*/
    /*
    it("Ejemplo de driodiwb",()=>{
        cy.contains('Dropdown').click()
        cy.get('#dropdown').select("Option 2")
 
    })*/
/*
    it("Ejemplo de linpiar un campo",()=>{
        cy.contains('Form Authentication').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').debug().type('SuperSecretPassword!')
        cy.get('#password').clear()
        cy.get('.fa').contains('Login').click()
 
    })*/
    /*
    it("Ejemplo de hove",()=>{
        cy.contains('Hovers').click()
       // cy.get('#content > div > div:nth-child(4) > div > a').invoke("show")
        //cy.get('#content > div > div:nth-child(4) > div > a').click({force:true})
 
    })
    */

    it("Ejemplo de click derecho",()=>{
        cy.contains('Context Menu').click()
        cy.get('#hot-spot').rightclick()
        cy.get('#hot-spot').invoke("trigger","contextmenu")
    cy.on("window:alert",(alert)=>{
        expect(alert).equal("You selected a context menu")
    })

 
    })

})