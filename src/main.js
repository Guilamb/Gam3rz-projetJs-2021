import Router from './Router';
import JeuList from './pages/jeuList';

const jeuList = new JeuList([]);

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [{ path: '/', page: jeuList, title: 'Instant G@M3RZ' }];

window.onpopstate = () => Router.navigate(document.location.pathname, false);
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();
