import Page from './Page';

export default class favoris extends Page {
	constructor() {
		super();
	}

	mount(el) {
		super.mount(el);
	}

	render() {
		const listeFavorisTemp = localStorage.getItem('favoris');
		const listeFavoris = JSON.parse(listeFavorisTemp);

		if (listeFavoris.length == 0) return `<h1> Tu n'as pas de favoris </h1>`;

		let finalHtml = `<link rel="stylesheet" type="text/css" href="css/gameCard.css">
						<div class="row align-items-start">`;
		listeFavoris.forEach(element => {
			finalHtml += `
			
			<div href="details-${element.slug}" class="col3 gameCard">
				<div class="gameCard-header">
					<h1 class="gameCard-title"> ${element.name} </h1>
					<button id="gameCard-button-favorite"> 
					<img class='favori' src="images/fav-clicked.png" alt="Bouton favori" width="50px" height="50px">
					</button>
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
