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
	}

	mount(element) {
		super.mount(element);
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
