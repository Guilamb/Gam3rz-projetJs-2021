import Page from './Page';
import DetailsComponent from '../components/detailsComponent';

export default class Details extends Page {
	#jeu;

	constructor(jeu) {
		super();
		this.#jeu = jeu;
	}

	set jeu(value) {
		this.#jeu = value;
		this.children = new DetailsComponent(this.#jeu);
	}

	mount(element) {
		super.mount(element);
	}
}
