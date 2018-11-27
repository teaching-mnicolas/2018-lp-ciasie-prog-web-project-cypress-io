describe('The basis', function() {
    it('Clicks the Login link', function() {
        cy.contains('Login').click();
        cy.url().should('include', '/login');
    });

    it('Login attempt', function() {
        cy.contains('Login').click();
        cy.get('#email_input').type('random@email.com');
        cy.get('#password_input').type('admin');
        cy.contains('Connexion').click();
        cy.url().should('include', '/login');
    });

    it('Check register link', function() {
        cy.contains('Login').click();
        cy.contains('Need an account ?').should('have.attr', 'href', '/register');
    });
});