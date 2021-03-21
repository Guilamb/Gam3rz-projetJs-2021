import Page from './Page';
import Member from '../components/Member';
import Component from '../components/Component';

export default class Lequipe extends Page {
	constructor() {
		super();
	}

	render() {
		return `
		<link rel="stylesheet" type="text/css" href="css/lequipe.css" />
		<h2>L'équipe de développement :</h2>
		
		<div class="row align-items-start">
		<div class="member">
		<h6 class="nom">Antoine Martinsse CorwynJ</h6>
		<a href="/details-Kirby-Super-Star-Ultra">Son jeu préféré est Kirby-Super-Star-Ultra</a>
		<h6 class="note">Il mérite un bon 100% de la note</h6>
		</div>
		
		<div class="member">
		<h6 class="nom">Aubrian Duhayon Skyeaaa</h6>
		<a href="/details-Dying-Light">Son jeu préféré est Dying-Light</a>
		<h6 class="note">Il mérite un bon 4000% de la note</h6>
		</div>

		<div class="member">
		<h6 class="nom">Guilhane Bourgoin Guilamb</h6>
		<a href="/details-hollow-knight">Son jeu préféré est hollow-knight</a>
		<h6 class="note">Il mérite un bon 100% de la note</h6>
		</div>

		<div class="member">
		<h6 class="nom">Thomas Prunier CosmicRadiocity</h6>
		<a href="/details-the-legend-of-zelda-the-wind-waker-hd">Son jeu préféré est the-legend-of-zelda-the-wind-waker-hd</a>
		<h6 class="note">Il mérite un bon 100% de la note</h6>
		</div>
		</div>`;
	}
}
