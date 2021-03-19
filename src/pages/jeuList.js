import Page from './Page';
import jeuThumbnail from '../components/jeuThumbnail';
import Requete from '../components/request';
import { format } from 'prettier';

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
		Requete.gameList(
			this,
			`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100`
		);
	}
}
