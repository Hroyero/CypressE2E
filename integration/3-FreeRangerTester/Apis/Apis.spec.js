describe('Purbas en api con Cypress', ()=>{
    /*
    it('el endpoint "posts" responde con status 200',()=>{
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts'
        }).then((respuesta)=>{
            expect(respuesta.status).to.eq(200)
        })
    })

    it('el endpoint "posts" tiene 100 entradas',()=>{
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts')
        .its('body')
        .should('have.length',100)
    })

    it('el post numero 1, tiene por titulo "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"',()=>{
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts/1')
        .its('body')
        .should('have.property','title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    })*/

    it('El POST request funciona correctamente para el endpoint',()=>{
        cy.request('POST','https://jsonplaceholder.typicode.com/posts',{
            userId:1,
            id:101,
            title:'Relatos salvajes',
            body: 'Una Pelicula argentina'
        }).then((response)=>{
            expect(response.body).to.have.property('title','Relatos salvajes')
        })
    })

    it('El PUT request funciona correctamente para el endpoint',()=>{
        cy.request('PUT','https://jsonplaceholder.typicode.com/posts/2',{
            title:'Relatos salvajes',
            body: 'Una Pelicula argentina'
        }).then((response)=>{
            expect(response.body).to.have.property('title','Relatos salvajes')
        })
    })

    
    it('El DELETE request funciona correctamente para el endpoint',()=>{
        cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/1')
    })
})