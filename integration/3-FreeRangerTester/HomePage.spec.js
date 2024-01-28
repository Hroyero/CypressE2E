describe('Home de hollmans', () =>{
    beforeEach(() =>{
        cy.visit('https://www.freerangetesters.com/')
       // cy.visit('https://demoqa.com/')
    })
    it('should have a title', ()=>{
        
        cy.title().should('include','Free Range Testers')
     //   cy.xpath('//header/nav[1]/ul[1]/li[2]/a[1]').click()
       
        //cy.get('[data-testid="header-container"] > .sc-clsGLE > .sc-dQpIV > :nth-child(2) > .sc-iqHXzD').click()
        /*
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
        //.cy.title().should('include',' ')
        //cy.get('.main-header').should('include', 'Alerts')
        cy.title().should('include','DEMOQA')
        */

    })
    it('hay 9 cursos con el boton para ver curso', ()=>{
        cy.xpath('//header/nav[1]/ul[1]/li[2]/a[1]').click()
        cy.get('.sc-hiSaRn > .sc-gWHiUp > .sc-iktFSN > .sc-jJEJze > .sc-hHftZz').should('have.length', 9)
    })
    it('Hay un link llamado recursos en la barra de navegacion', ()=>{
        cy.get('[data-testid="header-container"] > .sc-clsGLE > .sc-dQpIV > :nth-child(1) > .sc-iqHXzD').should('have.text', 'Recursos')
    })
    it('Existe un boton de registrarme en recursos', ()=>{
        cy.get('.sc-ehSCEj > .sc-hHftZz').as('BotonR')
        cy.get('BotonR').should('be.visible')
    })
    it('El elemento esta checked',()=>{
        cy.get('').should('be.checked')
        cy.get
    })
    it('El elemento esta disabled',()=>{
        cy.get('').should('be.disabled')
    })
})