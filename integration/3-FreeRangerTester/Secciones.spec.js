describe('El titulo es el correcto para cada subpagina en free ranger tester',()=>{
    before(function(){
        cy.fixture('titulos').then(function(testdata){
            this.testdata = testdata
        })
        
    })
    this.testData.forEach((testData)=>{
            it('Valida que el titulo sea el correcto',()=>{
                cy.visit(testData.Location)
                cy.title().should('include',testData.Title)
            })
})
})