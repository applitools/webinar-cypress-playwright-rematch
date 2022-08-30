export const loginPage = {
  username: '[data-cy=login-email]',
  password: '[data-cy=login-password]',
  log_in: '[data-cy=login-submit]',

  load() {
    cy.visit('/login')
    return this
  },

  login(username: string, pass: string) {
    cy.get(this.username).type(username)
    cy.get(this.password).type(pass)
    cy.get(this.log_in).click()
    return this
  }
}

