import Page from './Page';
import jeuThumbnail from '../components/jeuThumbnail';

export default class favoris extends Page {
	#jeux;

	constructor(jeux) {
		super(favoris);
		this.jeux = jeux;
	}

	set jeux(value) {
		this.#jeux = value;
	}

	show() {
		document.querySelectorAll('.flip-card-inner').forEach(el => {
			el.querySelector('.click').setAttribute('style', 'display = none');
		});
	}
}
