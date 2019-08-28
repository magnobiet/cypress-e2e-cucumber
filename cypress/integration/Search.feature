Feature: Teste E2E Cypress

	Scenario: Buscar por Cypress no Google
		Given que eu acesse a página principal do Google
		When digite Cypress
		When clique em Pesquisa Google
		When clique no primeiro resultado da busca
		Then a página do Cypress deve ser aberta
