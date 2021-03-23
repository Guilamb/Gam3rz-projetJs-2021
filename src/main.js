import Router from './Router';
import JeuList from './pages/jeuList';
import favoris from './pages/favoris';
import Lequipe from './pages/lequipe';
import Requete from './components/request';
import Details from './pages/details';

const details = new Details();

const jeuList = new JeuList([]);
Requete.gameList(
	jeuList,
	`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100`
);

const lequipe = new Lequipe();

const favo = new favoris();

Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: jeuList, title: 'Instant G@M3RZ' },
	{ path: 'lequipe.fr', page: lequipe, title: 'Instant G@M3RZ' },
	{ path: 'mes-favoris', page: favo, title: 'Instant G@M3RZ' },
	{ path: 'detail', page: details, title: 'Instant G@M3RZ' },
];

const form = document.querySelector('.d-flex');
form.addEventListener('submit', event => {
	event.preventDefault();
	const research = form.querySelector('input[name="search"]')?.value;

	Requete.gameList(
		jeuList,
		`https://api.rawg.io/api/games?page_size=20&search=${research}&metacritic=50,100&dates=2020-01-01,2021-12-31${
			Requete.order
		}${Requete.genreOption}${Requete.genres.toString()}`
	);
});

window.onpopstate = () => {
	let path = document.location.pathname;

	if (path.length > 1) Router.navigate(path.substr(1, path.length), false);
	else Router.navigate(document.location.pathname, false);
};
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();
