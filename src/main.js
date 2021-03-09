import Router from './Router';
import JeuList from './pages/jeuList';
import Detail from './pages/detail';

const jeuList = new JeuList([]);
jeuList.show(`https://api.rawg.io/api/games?page_size=40`);

const detail = new Detail([]);

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

const img = document.querySelectorAll('.flip-card-inner');
img.forEach(el =>
	el.addEventListener('click', event => {
		event.preventDefault();
		detail.show(`https://api/rawg.io/api/games/grand-theft-auto-v`);
	})
);

window.onpopstate = () => Router.navigate(document.location.pathname, false);
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();
