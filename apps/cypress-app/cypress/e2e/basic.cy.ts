describe("App loads", () => {
  it("should load the app and see the homepage", () => {
    cy.visit("/");
    cy.contains("Jest App").should("exist");
  });
});
