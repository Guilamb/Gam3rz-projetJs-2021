import Page from './Page';
import jeuThumbnail from '../components/jeuThumbnail';

export default class jeuList extends Page {
	#jeux;

	constructor(jeux) {
		super();
		this.jeux = jeux;
	}

	set jeux(value) {
		this.#jeux = value;
		this.children = this.#jeux.map(jeu => new jeuThumbnail(jeu));
	}

	mount(element) {
		super.mount(element);
	}
}
