import Requete from './components/request';
import Details from './pages/details';

export default class Router {
	static titleElement;
	static contentElement;
	static #menuElement;

	static routes = [];

	/**
	 * Indique au Router la balise HTML contenant le menu de navigation
	 * Écoute le clic sur chaque lien et déclenche la méthode navigate
	 * @param element Élément HTML de la page qui contient le menu principal
	 */
	static set menuElement(element) {
		this.#menuElement = element;
		const links = element.querySelectorAll('a');
		links.forEach(link =>
			link.addEventListener('click', event => {
				event.preventDefault();
				this.navigate(event.target.getAttribute('href'));
			})
		);
	}
	/**
	 * Navigue dans l'application
	 * Affiche la page correspondant à `path` dans le tableau `routes`
	 * @param {String} path URL de la page courante
	 * @param {Boolean} pushState active/désactive le pushState (ajout d'une entrée dans l'historique de navigation)
	 */
	static navigate(path, pushState = true) {
		let route;

		let pageDetails;

		if (path.includes('details')) {
			route = this.routes.find(route => route.path === 'details');
			pageDetails = true;
		} else {
			route = this.routes.find(route => route.path === path);
			pageDetails = false;
		}
		if (route) {
			// this.titleElement.innerHTML = `<h1>${route.title}</h1>`;
			this.contentElement.innerHTML = route.page.render();
			route.page.mount?.(this.contentElement);

			document.querySelectorAll('.wrapper a').forEach(link => {
				link.addEventListener('click', event => {
					event.preventDefault();
					Router.navigate(link.getAttribute('href'), true);
				});
			});

			if (pageDetails) {
				Requete.initDetails(
					route.page,
					`https://api.rawg.io/api/games/${path.substr(8, path.length)}`
				);
			}

			if (pushState) {
				window.history.pushState(null, null, path);
			}
		}
	}
}
