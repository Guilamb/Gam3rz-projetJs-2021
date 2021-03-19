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
			? `<video controls="controls" onloadstart="this.volume=0"> <source src="${data.clip.clip}"/> </video>`
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
        <link rel="stylesheet" type="text/css" href="css/pageDetails.css" />
		<div>
			<br>
			<div id="title">
				<h1 class="name"> ${data.name} </h1>
				<h1 class="note"> ${data.metacritic} </h1>
			</div>
			<br>
			<div id="presentation">
				<h1> <strong> Vidéo de présentation </strong> </h1>
				<br>
				<div id="video">
					${video}
				</div>
			</div>
			<br>
			<div id="description">
				<h1> <strong> Description du jeu </strong> </h1>
				<br>
				${data.description}
			</div>
			<br>
			<div id="screenshots">
				<h1> <strong> Screenshots </strong> </h1>
				<br>
				<figure>
					${images}
				</figure>
			</div>
			<br>
			<div id="plateformes">
				<h1> <strong> Plateformes </strong> </h1>
				<br>
				${plateformes}
			</div>
			<br>
			<div id="genres">
				<h1> <strong> Genres </strong> </h1>
				<br>
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
