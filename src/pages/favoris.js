import jeuThumbnail from '../components/jeuThumbnail';
import Page from './Page';

export default class favoris extends Page {
	#jeux;

	constructor(jeux) {
		super();
		this.jeux = jeux;
	}

	set jeux(value) {
		this.#jeux = value;
		this.show();
	}

	show() {
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

		listeFavoris.forEach(element => {
			console.log(element.name);
			new jeuThumbnail(element);
		});
	}
}
