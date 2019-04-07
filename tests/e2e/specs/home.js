// https://docs.cypress.io/api/introduction/api.html

describe("Home", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "nmtsn");
    cy.contains("h2", "Who am I?");
    cy.contains("p", "Nicolas");
  });
});
