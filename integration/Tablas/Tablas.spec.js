describe("tablas estaticas y dinamicas", function (){
    
    it('validamos texto en una tabla estatica', function(){
        /*
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.log(cy.get('.orangehrm-container'))

        
        cy.get('.orangehrm-container').each(($element, index, $list) => {
        // Utiliza el índice (index) para acceder a la primera columna de cada elemento
        const primeraColumna = $element.text();
        cy.wait(1000)
        cy.log('Holaaaa' + primeraColumna)
        // Realiza la validación que necesites para la primera columna
        if(primeraColumna.includes('Username')){
            cy.log("Hola")
        }
        });
    })
*/
cy.visit('https://demoqa.com/books')

})
})