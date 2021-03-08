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

	mount(element) {
		super.mount(element);
		for (let index = 1; index < 10; index++) {
			fetch(`https://api.rawg.io/api/games?page=${index}`)
				.then(response => response.json())
				.then(data => {
					this.jeux = data.results;
				})
				.then(() => {
					this.element.innerHTML += this.render();
				})
				.then(() => {
					document.querySelectorAll('.flip-card-inner').forEach(el => {
						el.querySelector('.flip-card-back > button').addEventListener(
							'click',
							function (event) {
								event.preventDefault();
								const img = el.querySelector('.flip-card-back .fav');

								if (!img.classList.contains('.click')) {
									img.setAttribute('src', './images/star-fav-clicked.png');
									img.classList.add('.click');
									el.querySelector('.flip-card-front > .fav').setAttribute(
										'src',
										'./images/star-fav-clicked.png'
									);
									el.querySelector('.flip-card-front > .fav').removeAttribute(
										'style'
									);
								} else {
									img.setAttribute('src', './images/star-fav.png');
									img.classList.remove('.click');
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
}

function initCircle(elem) {
	let barre;
	let angle;
	let valeur;

	barre = elem.querySelector('.progress-barre');

	valeur = elem.getAttribute('value');
	valeur = valeur ? valeur * 1 : 0;
	elem.setAttribute('value', valeur.toFixed(1));

	angle = (360 * valeur) / 100;

	if (barre) {
		barre.style.transform = 'rotate(' + angle + 'deg)';
	}
}
