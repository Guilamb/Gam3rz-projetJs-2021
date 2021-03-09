import Page from './Page';
import jeuThumbnail from '../components/jeuThumbnail';

export default class jeuList extends Page {
	#jeux;

	constructor(jeux) {
		super('jeuList'); // on passe juste la classe CSS souhaitée
		this.jeux = jeux;
	}

	set jeux(value) {
		this.#jeux = value;
		this.children = this.#jeux.map(jeu => new jeuThumbnail(jeu));
	}

	show(url) {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				this.jeux = data.results;
			})
			.then(() => {
				this.element.innerHTML = this.render();
			})
			.then(() => {
				document.querySelectorAll('.flip-card-inner').forEach(el => {
					el.querySelector('.flip-card-back > button').addEventListener(
						'click',
						function (event) {
							event.preventDefault();
							const img = el.querySelector('.flip-card-back .fav');

							if (!img.classList.contains('click')) {
								img.setAttribute('src', './images/star-fav-clicked.png');
								img.classList.add('click');
								el.querySelector('.flip-card-front > .fav').setAttribute(
									'src',
									'./images/star-fav-clicked.png'
								);
								el.querySelector('.flip-card-front > .fav').removeAttribute(
									'style'
								);
							} else {
								img.setAttribute('src', './images/star-fav.png');
								img.classList.remove('click');
								el.querySelector('.flip-card-front > .fav').setAttribute(
									'style',
									'visibility:hidden;'
								);
							}
						}
					);
				});
			});
	}
}
