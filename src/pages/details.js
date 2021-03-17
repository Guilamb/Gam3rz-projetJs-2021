import Page from './Page';
import DetailsComponent from '../components/detailsComponent';
import Requete from '../components/request';

export default class Details extends Page {
	#jeu;

	constructor(jeu) {
		super();
		this.#jeu = jeu;
	}

	set jeu(value) {
		this.#jeu = value;
		// this.children = [new DetailsComponent(this.#jeu)];
	}

	mount(element) {
		super.mount(element);
	}

	unmount() {
		super.unmount();
	}

	render() {
		let data = this.#jeu;
		if (!data) return 'Chargement en cours';
		return `
				<div class="details">
					Page détails de ${data.name}

					${data.description}
				</div>
				`;
	}
}
