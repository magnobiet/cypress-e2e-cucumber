/// <reference types="cypress" />

import SearchElements from '../elements/SearchElements';

const elements = new SearchElements;
const url = Cypress.config('baseUrl');

export default class SearchPage {

	visit() {
		cy.visit(url);
	}

	enterSearchTerm() {
		cy.get(elements.searchInput()).type('Cypress E2E');
	}

	clickSubmit() {
		cy.get(elements.submitButton()).first().click();
	}

	clickOnFirstResult() {
		cy.get(elements.results()).first().click();
	}

	checkCypressPage() {
		cy.get(elements.cypressPageTitle()).should('contain', 'JavaScript End to End Testing Framework | cypress.io');
	}

}
