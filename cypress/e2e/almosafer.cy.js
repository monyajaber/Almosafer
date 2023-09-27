/// <reference types= "cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

describe('Aspire test cases', () => {
    it('check the currency SAR', () => {
       let websites=["https://global.almosafer.com/en",
       "https://global.almosafer.com/ar"]
// floor =int number 
//random number
//length 0 or 1
       let RandomIndex = Math.floor(Math.random()*websites.length);
       cy.visit(websites[RandomIndex]);
       cy.get(".cta__saudi").click();

       cy.get("#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm").click();
   
       if(RandomIndex ==0){
        cy.get('[data-testid="AutoCompleteInput"]').type("dubai")
   }
 else
 {
   cy.get('[data-testid="AutoCompleteInput"]').type("دبي")
     }
   });
    });
