import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit login", () => {
  cy.visit("/login");
});

Then("I submit my credentials", () => {
  cy.get('[data-cy="login-email"]').type("filip@example.com")
  cy.get('[data-cy="login-password"]').type("i<3slovakia!")
  cy.get('[data-cy="login-submit"]').click()
});
