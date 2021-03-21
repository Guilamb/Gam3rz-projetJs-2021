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

		// this.children = this.#jeux.map(jeu => new jeuThumbnail(jeu));
	}

	mount(element) {
		super.mount(element);
		Requete.gameList(
			this,
			`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100`
		);
	}

	unmount() {
		console.log('unmount jeuList');
		this.#jeux = null;
		this.render();
	}

	render() {
		let data = this.#jeux;
		if (!data) return 'Chargement en cours ...';

		let html = `<link rel="stylesheet" type="text/css" href="css/gameCard.css">
			 <div class="row align-items-start">`;

		data.forEach(jeu => {
			html += `
				<div class="col3 gameCard">
				<div class="gameCard-header">
					<h1 class="gameCard-title"> ${jeu.name} </h1>
					<button id="gameCard-button-favorite"> 
						<img src="images/fav.png" alt="Bouton favori" width="50px" height="50px">
					</button>
				</div>
				<a class="detail" href="details-${jeu.slug}">
				<div class="gameCard-body">
					<img src="${jeu.background_image}" alt="Image de ${jeu.name}" width=300 height=200>
				</div>
				<div class="gameCard-footer">
					<h6 id="timestamp">${jeu.released}</h6>
					<h3 id="note">${jeu.metacritic}</h3>
				</div>
			</a>
			</div>
			`;
		});

		html += `</div> 
        <button class="moreGames"> REMPLACER LE BOUTON PAR UN SCROLL EVENT </button>`;

		return html;
	}
}
