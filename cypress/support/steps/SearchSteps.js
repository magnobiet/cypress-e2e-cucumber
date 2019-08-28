/// <reference types="cypress" />

import SearchPage from '../page-objects/SearchPage';

const page = new SearchPage;

Given('que eu acesse a página principal do Google', () => {
	page.visit();
});

When('digite Cypress', () => {
	page.enterSearchTerm();
});

When('clique em Pesquisa Google', () => {
	page.clickSubmit();
});

When('clique no primeiro resultado da busca', () => {
	page.clickOnFirstResult();
});

Then('a página do Cypress deve ser aberta', () => {
	page.checkCypressPage();
});
