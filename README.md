# Cypress Project

This repository contains a minimal Cypress setup for end-to-end testing.

## Prerequisites

- Node.js
- npm

## Install

```bash
npm install
```

## Run tests

Open the Cypress Test Runner:

```bash
npm run cy:open
```

Run tests headlessly:

```bash
npm run cy:run
```

## Project structure

- `cypress.config.js` — Cypress configuration
- `cypress/e2e/` — test files
- `.github/workflows/cypress.yml` — GitHub Actions workflow for CI

## Notes

This project is intentionally minimal and ready for extension with your own app and test scenarios.
