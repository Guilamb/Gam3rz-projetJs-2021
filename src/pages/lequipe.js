import Page from './Page';
import Member from '../components/Member';
import Component from '../components/Component';
import Router from '../Router';

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
		<img src='https://media1.giphy.com/media/5ev3alRsskWA0/giphy.gif'>
		<h6>Son jeu préféré est <a class="detail" href="/details-Kirby-Super-Star-Ultra"> Kirby Super Star Ultra</a></h6>
		<h6 class="note">Il mérite un bon 100% de la note</h6>
		</div>
		
		<div class="member">
		<h6 class="nom">Aubrian Duhayon Skyeaaa</h6>
		<img src='https://media1.giphy.com/media/7vmYjCRwWxbgs/giphy.gif'>
		<h6>Son jeu préféré est <a class="detail" href="/details-Dying-Light">Dying Light</a></h6>
		<h6 class="note">Il mérite un bon 4000% de la note</h6>
		</div>

		<div class="member">
		<h6 class="nom">Guilhane Bourgoin Guilamb</h6>
		<img src='https://cdn03.nintendo-europe.com/media/images/08_content_images/games_6/wiiu_download_software_4/wiiuds_hollowknight/CI_WiiUDS_HollowKnight_SymphonyOfTheKnight.gif'>
		<h6>Son jeu préféré est <a class="detail" href="/details-hollow-knight">Hollow Knight</a></h6>
		<h6 class="note">Il mérite un bon 100% de la note</h6>
		</div>

		<div class="member">
		<h6 class="nom">Thomas Prunier CosmicRadiocity</h6>
		<img src='https://thumbs.gfycat.com/UnrealisticAcidicBlueandgoldmackaw-size_restricted.gif'>
		<h6>Son jeu préféré est <a class="detail" href="/details-the-legend-of-zelda-the-wind-waker-hd">The Legend of Zelda The Wind Waker HD</a></h6>
		<h6 class="note">Il mérite un bon 100% de la note</h6>
		</div>
		</div>`;
	}

	initlinks() {
		document.querySelectorAll('.detail').forEach(link => {
			link.addEventListener('click', event => {
				event.preventDefault();
				let href = link.getAttribute('href');
				Router.navigate(href.substr(1, href.length));
			});
		});
	}
}
