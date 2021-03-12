import Page from './Page';
import jeuThumbnail from '../components/jeuThumbnail';
import Router from '../Router';
import Details from './details';

const details = new Details();

export default class jeuList extends Page {
	#jeux;

	constructor(jeux) {
		super('jeuList'); // on passe juste la classe CSS souhaitée
		this.jeux = jeux;
	}

	set jeux(value) {
		this.#jeux = value;
		this.children = this.#jeux.map(jeu => new jeuThumbnail(jeu));
	}
}
