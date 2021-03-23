import Page from './Page';
import Router from '../Router';

export default class favoris extends Page {
	constructor() {
		super();
	}

	mount(el) {
		super.mount(el);

		document.querySelectorAll('.detail').forEach(link => {
			link.addEventListener('click', event => {
				event.preventDefault();
				Router.navigate(link.getAttribute('href'));
			});
		});
	}

	render() {
		const listeFavorisTemp = localStorage.getItem('favoris');
		const listeFavoris = JSON.parse(listeFavorisTemp);

		if (!listeFavoris || listeFavoris.length == 0)
			return `<h1> Tu n'as pas de favoris </h1>`;

		let finalHtml = `<link rel="stylesheet" type="text/css" href="css/gameCard.css">
						<div class="row align-items-start">`;
		listeFavoris.forEach(element => {
			if (element)
				finalHtml += `
				
				<div href="details-${element.slug}" class="col3 gameCard">
					<div class="gameCard-header">
						<h1 class="gameCard-title"> ${element.name} </h1>
						<button id="gameCard-button-favorite"> 
						<img class='favori' src="images/fav-clicked.png" alt="Bouton favori" width="50px" height="50px">
						</button>
					</div>
					<a class="detail" href="detail-${element.slug}">
					<div class="gameCard-body">
						<img src="${element.background_image}" alt="Image de GTA" width=300 height=200>
					</div>
					<div class="gameCard-footer">
						<h6 id="timestamp">${element.released}</h6>
						<h3 id="note">${element.metacritic}</h3>
					</div>
					</a>
				</div>
			`;
		});
		finalHtml += '</div>';
		return finalHtml;
	}
}
