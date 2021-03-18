import Page from './Page';

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
		let gameImages = this.#screenshots;

		if (!data && !gameImages) return 'Chargement en cours';

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
						<img src="${gameImages[0].image}">
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
