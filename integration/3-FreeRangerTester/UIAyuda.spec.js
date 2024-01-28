describe("Pruebas sobre UI", ()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/")
    })
    it('Ejemplos de esperas',()=>{
        /*
        cy.wait(1000)
        cy.contains("Challenging DOM").click()
        */
       //esto es para validar en una nueva pestaña
        cy.contains("Multiple Windows").click()
        cy.contains("Click Here").invoke('removeAttr','target').click()
        cy.contains("New Window").should('have.text','New Window')

        //ShadowDom
        
    })
    //Paginas Dinamicas
    it('Primer y ultimo elemento',()=>{
            cy.contains('Dynamic Content').click()
           // cy.get('img').first().should('be.visible')
           //cy.get('img').last().should('be.visible')
           cy.get('img').eq(2).should('be.visible')
    })
    it('Padres e Hijos',()=>{
        cy.contains('Dynamic Content').click()
        cy.get(':nth-child(4) > .large-2 > img').parent()

    })
    it('Invoke',()=>{
        cy.contains('Dynamic Content').should('be.hidden').invoke('show').should('be.visible')
    })
})