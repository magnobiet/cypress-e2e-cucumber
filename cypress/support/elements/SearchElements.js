export default class SearchElements {

	searchInput = () => 'input[name="q"]';
	submitButton = () => 'input[value="Pesquisa Google"][type="submit"]';
	results = () => '#rso .srg .g a';
	cypressPageTitle = () => 'head > title';

}
