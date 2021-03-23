import jeuThumbnail from '../components/jeuThumbnail';
import Page from './Page';

export default class favoris extends Page {
	#jeux;

	constructor() {
		super();
	}

	set jeux(value) {
		this.#jeux = value;
		this.children = this.show();
	}

	mount(el) {
		let creationCartes;
		const listeFavorisTemp = localStorage.getItem('favoris');
		const listeFavoris = JSON.parse(listeFavorisTemp);
		/*
		document.querySelectorAll('.col-3.flip-card').forEach(el => {
			if (listeFavoris.includes(el.querySelector('.card-title').innerText)) {
				console.log(
					el.querySelector('.flip-card-inner .card-title').innerText +
						' est dans les favoris'
				);
			} else {
				console.log(el.className);
				el.setAttribute('style', 'display : none');
			}
		});*/
		console.log('liste : ' + listeFavoris); //retourne OBJ OBJ
	}

	render() {
		const listeFavorisTemp = localStorage.getItem('favoris');
		const listeFavoris = JSON.parse(listeFavorisTemp);

		if (listeFavoris.length == 0) return `<h1> Tu n'as pas de favoris </h1>`;

		let finalHtml = `<link rel="stylesheet" type="text/css" href="css/gameCard.css">
						<div class="row align-items-start">`;
		listeFavoris.forEach(element => {
			console.log(element);
			finalHtml += `
			
			<div href="details-${element.slug}" class="col3 gameCard">
				<div class="gameCard-header">
					<h1 class="gameCard-title"> ${element.name} </h1>
					<button id="gameCard-button-favorite"> Add to fav </button>
				</div>
				<div class="gameCard-body">
					<img src="${element.background_image}" alt="Image de GTA" width=300 height=200>
				</div>
				<div class="gameCard-footer">
					<h6 id="timestamp">${element.released}</h6>
					<h3 id="note">${element.metacritic}</h3>
				</div>
			</div>
		`;
		});
		finalHtml += '</div>';
		return finalHtml;
	}
}
