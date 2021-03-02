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
		this.children = [this.#jeux].map(jeu => new jeuThumbnail(jeu));
	}

	mount(element) {
		super.mount(element);
		fetch('https://api.rawg.io/api/games')
			.then(response => response.json())
			.then(data => {
				this.jeux = data;
				console.log(data);
			})
			.then(() => {
				this.element.innerHTML = this.render();
			});
	}
}
