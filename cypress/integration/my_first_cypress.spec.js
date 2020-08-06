describe('my first test', function() {
    it('visit baidu and fill input', function() {
        cy.visit('http://www.baidu.com')

        // cy.pause() // 暂停

        cy.get('#kw').type('Cypress').should('have.value', 'Cypress')
        cy.get('#su').click()
    })
})