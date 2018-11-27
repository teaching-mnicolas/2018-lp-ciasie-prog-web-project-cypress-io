describe('Logout spec', function() {
    beforeEach(function() {
        cy.login();
    });
    it('Contains text when logged in', function() {
        cy.visit('localhost:8080');
        cy.contains('#logged', 'You are logged in as');
    });

    it('Contains logout button when logged in', function() {
        cy.visit('localhost:8080');
        cy.contains('#logout', 'Logout');
    });

    it('Logs out on button click', function() {
        cy.visit('localhost:8080');
        cy.contains('#logout', 'Logout').click();
        cy.contains('#logged', 'You are not logged in');
        cy.contains('#logout', 'Logout').not();
    });
});