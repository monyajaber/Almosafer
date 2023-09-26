/// <reference types= "cypress" />

const expectedCurrency="SAR"
const expectedAttribute="lang"
const expectedLanguage="en"

describe('Aspire test cases', () => {
    it.skip('check the currency SAR', () => {
        cy.visit("https://global.almosafer.com/en")
        cy.get('.cta__saudi').click()
        cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include',expectedCurrency)

    });
    it('check the language of the website', () => {
        cy.visit("https://global.almosafer.com/en")
        cy.get('.cta__saudi').click()
        cy.get('html').should('have.attr',expectedAttribute,expectedLanguage)
    });
});