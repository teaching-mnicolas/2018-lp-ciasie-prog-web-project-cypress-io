describe('Login spec', function() {
    it('Clicks the Login link', function() {
        cy.visit('localhost:8080');
        cy.contains('Login').click();
        cy.url().should('include', '/login');
    });

    it('Login attempt', function() {
        cy.pause();
        cy.visit('localhost:8080/login');
        cy.get('#email_input').type('random@email.com');
        cy.get('#password_input').type('admin');
        cy.contains('Connexion').click();
        cy.url().should('eq', 'http://localhost:8080/');
    });

    it('Check register link', function() {
        cy.visit('localhost:8080/login');
        cy.contains('Need an account ?').should('have.attr', 'href', '/register');
    });
});