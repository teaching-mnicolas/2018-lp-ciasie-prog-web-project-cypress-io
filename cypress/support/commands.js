Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8080/login_attempt',
        params: {
            email: 'random@email.com',
            password: 'admin'
        }
    });
});