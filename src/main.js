import Router from './Router';
import JeuList from './pages/jeuList';
import favoris from './pages/favoris';
import Lequipe from './pages/lequipe';
import Requete from './components/request';
import Details from './pages/details';
import GenreItem from './components/GenreItem';
import GenreList from './components/GenreList';

const details = new Details();

let order = '';
const jeuList = new JeuList([]);
Requete.initFetch(
	jeuList,
	`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100`
);

const lequipe = new Lequipe();

const favo = new favoris(jeuList.jeux);

Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: jeuList, title: 'Instant G@M3RZ' },
	{ path: 'lequipe.fr', page: lequipe, title: 'Instant G@M3RZ' },
	{ path: 'favoris', page: favoris, title: 'Instant G@M3RZ' },
	{ path: 'details', page: details, title: 'Instant G@M3RZ' },
];

const form = document.querySelector('.d-flex');
form.addEventListener('submit', event => {
	event.preventDefault();
	const research = form.querySelector('input[name="search"]') ?.value;
	Requete.initFetch(
		jeuList,
		`https://api.rawg.io/api/games?page_size=20&search=${research}&metacritic=50,100&ordering=${order}`
	);
});

const favor = document
	.querySelector('.fav')
	.addEventListener('click', event => {
		event.preventDefault();
		favo.show();
	});
const btnFavo = document.querySelector('btnFavoris');

document.querySelector('.moreGames').addEventListener('click', event => {
	event.preventDefault();
	Requete.addNewGames(
		jeuList,
		`https://api.rawg.io/api/games?page=${Requete.numPage}&page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100&ordering=${order}`
	);
});

const tri = document.querySelectorAll('.tri-item');
tri[0].addEventListener('click', event => {
	event.preventDefault();
	order = '';
});
tri[1].addEventListener('click', event => {
	event.preventDefault();
	order = '-released';
});
tri[2].addEventListener('click', event => {
	event.preventDefault();
	order = '-metacritic';
});
tri.forEach(element =>
	element.addEventListener('click', event => {
		Requete.initFetch(
			jeuList,
			`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100&ordering=${order}`
		);
	})
);

//Décommenter pour voir une implémentation du filtre des genres
/*let genreItems = [];
let i = 0;

fetch('https://api.rawg.io/api/genres')
	.then(response => response.json())
	.then(data => {
		data.results.forEach(element => {
			genreItems[i] = new GenreItem(element.name, element.slug).render();
			i++;
		})
		document.querySelector('.genreMenu').innerHTML = new GenreList(genreItems).render();
	}).then(e => {
		document.querySelectorAll('.genre-item').forEach(element => {
			element.addEventListener('click', event => {
				Requete.initFetch(jeuList, `https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100&genres=${element.id}&ordering=${order}`);
			})
		})
	});*/



window.onpopstate = () => Router.navigate(document.location.pathname, false);
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();
