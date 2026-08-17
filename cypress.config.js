const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'b3mt1f',
  e2e: {
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
});
