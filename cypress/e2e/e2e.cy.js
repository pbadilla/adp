// end-to-end tests for app.js

describe('End-to-End Test', () => {
  it('should perform calculation and submit task', () => {
    cy.visit('http://localhost:3000/calculation');

    cy.intercept('GET', 'https://interview.adpeai.com/api/v1/get-task', {
      fixture: '../fixtures/calculation.json'
    }).as('getTask');

    cy.wait('@getTask').then((interception) => {
      const taskData = interception.response.body;

      const calculationResult = performCalculation(taskData);
      cy.log('Result of the calculation:', calculationResult);

      cy.intercept('POST', `https://interview.adpeai.com/api/v1/submit-task/${taskData.id}`, {
        statusCode: 200,
        body: { success: true }
      }).as('submitTask');

      cy.get('body').should('include.text', `{"result":${calculationResult}}`);
  
      cy.wait('@submitTask').then((submitTaskInterception) => {
        expect(submitTaskInterception.response.statusCode).to.eq(200);
      });
    });
  });
});
