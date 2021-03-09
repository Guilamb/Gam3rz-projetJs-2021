import Router from './Router';
import JeuList from './pages/jeuList';
import Detail from './pages/detail';
import favoris from './pages/favoris';

const jeuList = new JeuList([]);
jeuList.show(`https://api.rawg.io/api/games?page_size=40`);

const detail = new Detail([]);

const favo = new favoris(jeuList.jeux);

Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: jeuList, title: 'Instant G@M3RZ' },
	{ path: '/detail/', page: detail, title: 'Instant G@M3RZ' },
];

const form = document.querySelector('.d-flex');
form.addEventListener('submit', event => {
	event.preventDefault();
	const research = form.querySelector('input[name="search"]')?.value;
	jeuList.show(`https://api.rawg.io/api/games?search=${research}`);
});

const favor = document
	.querySelector('.fav')
	.addEventListener('click', event => {
		event.preventDefault();
		favo.show();
	});

window.onpopstate = () => Router.navigate(document.location.pathname, false);
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();
