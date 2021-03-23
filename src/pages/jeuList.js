import Page from './Page';
import Requete from '../components/request';

export default class jeuList extends Page {
	#jeux;

	constructor(jeux) {
		super();
		this.jeux = jeux;
	}

	set jeux(value) {
		this.#jeux = value;
	}

	mount(element) {
		super.mount(element);

		Requete.gameList(
			this,
			`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100`
		);
	}

	unmount() {
		this.#jeux = null;
		Requete.numPage = 1;
		this.render();
	}

	render() {
		let data = this.#jeux;
		const listeFavoris = JSON.parse(localStorage.getItem('favoris'));
		if (!data) return '<h1> Chargement en cours ... </h1>';

		if (data.length === 0)
			return `<h1>Il n'y a pas de jeu correspondant à la recherche !</h1>`;

		let html = `<link rel="stylesheet" type="text/css" href="css/gameCard.css">
			 <div class="row align-items-start">`;

		data.forEach(jeu => {
			html += `
				<div class="col3 gameCard">
				<div class="gameCard-header">
					<h1 class="gameCard-title"> ${jeu.name} </h1>
					<button id="gameCard-button-favorite"> `;

			if (
				listeFavoris != null &&
				listeFavoris.some(item => item.name == jeu.name)
			) {
				html += `<img class='favori' src="images/fav-clicked.png" alt="Bouton favori" width="50px" height="50px">`;
			} else {
				html += `<img class='favori' src="images/fav.png" alt="Bouton favori" width="50px" height="50px">`;
			}

			html += `</button>
				</div>
				<a class="detail" href="detail-${jeu.slug}">
				<div class="gameCard-body">
					<img src="${
						jeu.background_image
							? jeu.background_image
							: 'https://img.huffingtonpost.com/asset/5c9385a22300004b00aed32e.gif?ops=scalefit_630_noupscale'
					}" alt="Image de ${jeu.name}" width=300 height=200>
				</div>
				<div class="gameCard-footer">
					<h6 id="timestamp">${jeu.released}</h6>
					<h3 id="note">${jeu.metacritic}</h3>
				</div>
			</a>
			</div>
			`;
		});

		html += `</div>`;

		return html;
	}
}
