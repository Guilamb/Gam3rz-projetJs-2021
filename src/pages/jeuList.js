import Page from './Page';
import jeuThumbnail from '../components/jeuThumbnail';

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

	mount(element) {
		super.mount(element);
		for (let index = 1; index < 10; index++) {
			fetch(`https://api.rawg.io/api/games?page=${index}`)
				.then(response => response.json())
				.then(data => {
					this.jeux = data.results;
				})
				.then(() => {
					this.element.innerHTML += this.render();
				});
		}
	}
}
