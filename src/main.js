import Router from './Router';
import JeuList from './pages/jeuList';

const jeuList = new JeuList([]);

Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [{ path: '/', page: jeuList, title: 'Instant G@M3RZ' }];

window.onpopstate = () => Router.navigate(document.location.pathname, false);
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();

document.addEventListener('DOMContentLoaded', function () {
	let barres = document.querySelectorAll('.progress-circle');
	let i,
		nb = barres.length;
	for (i = 0; i < nb; i++) {
		initJauge(barres[i]);
	}
});
