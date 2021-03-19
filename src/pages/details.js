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

		const video = data.clip
			? `<video controls="controls"> <source src="${data.clip.clip}"/> </video>`
			: `<img src='https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif'>`;

		let images = '';
		gameImages.forEach(image => {
			images += `
			<img class='screenshot' src='${image.image}' alt>
			`;
		});

		let plateformes = '<ul>';
		data.platforms.forEach(plateforme => {
			plateformes += `<li> ${plateforme.platform.name} </li>`;
		});
		plateformes += '</ul>';

		let genres = '<ul>';
		data.genres.forEach(genre => {
			genres += `<li> ${genre.name} </li>`;
		});
		genres += '</ul>';

		return `
		<div>
			<br>
			<div id="title">
				<h1> ${data.name} NOTE : ${data.metacritic}</h1>
			</div>
			<br>
			<div id="video">
				Vidéo de présentation
				${video}
			</div>
			<br>
			<div id="screenshots">
				Liste de screenshots
				<figure>
					${images}
				</figure>
			</div>
			<br>
			<div id="description">
				Description
				${data.description}
			</div>
			<br>
			<div id="plateformes">
				Plateformes
				${plateformes}
			</div>
			<br>
			<div id="genres">
				Genres
				${genres}
			</div>
			<br>
			<div>
				TODO FAVORI
			</div>
		</div>
		`;
	}
}
