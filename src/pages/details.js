import Page from './Page';
import Requete from '../components/request';
import Img from '../components/Img';

export default class Details extends Page {
	#jeu;
	#screenshots;

	constructor(jeu) {
		super();
		this.#jeu = jeu;
	}

	set jeu(value) {
		this.#jeu = value;
	}

	set screenshots(value) {
		this.#screenshots = value;
		console.log(this.#screenshots);
	}

	mount(element) {
		super.mount(element);
	}

	unmount() {
		this.#jeu = null;
		this.#screenshots = null;
	}

	render() {
		let data = this.#jeu;
		if (!data) return 'Chargement en cours';

		let gameImages = this.#screenshots;
		if (!gameImages) {
			Requete.initScreenshots(
				this,
				`https://api.rawg.io/api/games/${data.slug}/screenshots`
			);
			return;
		}
		return `
				<div style="border-radius: 5px; border-color: brown;">
					<br>
					<h1> ${data.name} NOTE : ${data.metacritic}</h1>
					<br>
					<div>
						<video controls="controls">
							<source src="${data.clip.clip}"/>    
						</video>
					</div>
					<br>
					<div>
						TODO SCREENSHOTS
					</div>
					<div>
						${data.description}
					</div>

					<div>
						TODO FAVORI, PLATEFORMES, GENRES
					</div>
				</div>
				`;
	}
}
