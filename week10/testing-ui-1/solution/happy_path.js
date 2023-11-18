describe("user login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("user can login successfully with valid inputs", () => {
    cy.get("input[name=email]").focus().type("soorria@email.com");
    cy.get("input[name=password]").focus().type("super secure password");
    cy.get("button[type=submit]").click();

    cy.get("h1").then((h1) => {
      expect(h1.text()).to.contain("You're logged in");
    });
  });

  it("login with invalid inputs", () => {
    cy.get("input[name=email]").focus().type("soorria@email.com");
    cy.get("input[name=password]").focus().type("super");
    cy.get("button[type=submit]").click();

    cy.get("p").then((p) => {
      expect(p.text()).to.contain("Incorrect password");
    });
  });
});
