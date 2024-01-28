
describe("Validaciones implicitas y explicitas", ()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/")
    })
    it("validacion implicitas",()=>{
        //recomienda hacer sus validaciones
        cy.contains("Inputs")
        .click()
        cy.get('h3')
        .should('have.text','Inputs')
        cy.get('.example')
        .should('have.class','example')
        .and('be.visible')
    })
    it("validacion explicitas",()=>{
        cy.contains("Inputs").click()
        cy.get('h3')
        expect('Inputs').to.equals('Inputs')
    })

    it('Espera que las promesas se resuelvan', ()=>{
        let waited = false

        function waitOneSecond(){
            //Devuelve una promesa que se da por resuleta al pasar 1 segundo
            return new Cypress.Promise((resolve, reject)=>{
                setTimeout(()=>{
                    // Ponemos el waited en true
                    waited = true
                    // resuelve con el string 'foo'
                    resolve('foo')
                }, 4000)
            })
        }

        cy.wrap(null).then(()=>{
            //DEVUELVE UNA PROMERSA A CY.THEN QUE
            //ES ESPERADA (WAITED) HASTA QUE RESUELVE
            return waitOneSecond().then((str)=>{
                expect(str).to.equal('foo')
                expect(waited).to.be.true
            })
        })
    })
})