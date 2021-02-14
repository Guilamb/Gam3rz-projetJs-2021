export default class Router {
	static titleElement;
	static contentElement;
	static #menuElement;

	static routes = [];
	// static currentRoute;

	static set menuElement(element) {
		this.#menuElement = element;
		const links = element.querySelectorAll('a');
		links.forEach(link => link.addEventListener('click', this.handleMenuClick));
	}
	static handleMenuClick = event => {
		event.preventDefault();
		this.navigate(event.target.getAttribute('href'));
	};

	static navigate(path, pushState = true) {
		const route = this.routes.find(route => route.path === path);
		if (route) {
			// this.currentRoute?.page.unMount();
			this.titleElement.innerHTML = `<h1>${route.title}</h1>`;
			this.contentElement.innerHTML = route.page.render();
			route.page.mount?.(this.contentElement);
			// this.currentRoute = route;
			// gestion menu (classe "active")
			const menuLink = this.#menuElement.querySelector(
					`a[href="${route.path}"]`
				),
				prevActiveLink = this.#menuElement.querySelector('a.active');
			prevActiveLink?.classList.remove('active');
			menuLink?.classList.add('active');
			if (pushState) {
				window.history.pushState(null, null, path);
			}
		}
	}
}
