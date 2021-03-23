import { doc } from 'prettier';
import Router from '../Router.js';
import GenreItem from './GenreItem.js';
import GenreList from './GenreList.js';

export default class Requete {
	static numPage = 1;
	static order = '';
	static genres = [];
	static genreOption = '';
	static moreGamesAdded = false;
	static initTri = false;
	static initGenre = false;

	static gameList(page, url, add = false) {
		let listeFavoris = [];
		let jeux;

		url += '&key=dd152cced88e43fabd8ff4e4395448a9';

		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.jeux = data.results;
				jeux = data.results;
			})
			.then(() => {
				if (page.element)
					if (!add) {
						page.element.innerHTML = page.render();
					} else {
						page.element.innerHTML += page.render();
					}
			})
			.then(() => {
				document
					.querySelectorAll('.gameCard' /*'.flip-card-inner'*/)
					.forEach((el, index) => {
						const button_favorite = el.querySelector(
							'#gameCard-button-favorite'
						);
						console.log;
						let cliqued = false;
						button_favorite.addEventListener('click', function (event) {
							event.preventDefault();
							if (
								button_favorite.querySelector('img').getAttribute('src') ==
								'images/fav-clicked.png'
							) {
								cliqued = false;
							} else {
								cliqued = true;
							}
							const whatIsInLocalStorage = localStorage.getItem('favoris');

							if (cliqued) {
								button_favorite
									.querySelector('img')
									.setAttribute('src', 'images/fav-clicked.png');

								if (whatIsInLocalStorage != null) {
									listeFavoris = JSON.parse(whatIsInLocalStorage);
								}

								listeFavoris.push(jeux[index]);

								localStorage.setItem('favoris', JSON.stringify(listeFavoris));
							} else {
								button_favorite
									.querySelector('img')
									.setAttribute('src', 'images/fav.png');
								if (whatIsInLocalStorage != null) {
									listeFavoris = JSON.parse(whatIsInLocalStorage);
								}
								let myIndex = 0;
								let i = 0;
								listeFavoris.forEach(game => {
									if (game.name == jeux[index].name) {
										myIndex = i;
									}
									i++;
								});
								listeFavoris.splice(myIndex, 1);
								localStorage.removeItem('favoris');
								localStorage.setItem('favoris', JSON.stringify(listeFavoris));
							}
						});
					});

				document.querySelectorAll('.detail').forEach(link => {
					link.addEventListener('click', event => {
						event.preventDefault();
						Router.navigate(link.getAttribute('href'));
					});
				});

				if (!this.initTri) {
					this.initSortingList(page);
					this.initTri = true;
				}
				if (!this.initGenre) {
					this.genreList(page);
					this.initGenre = true;
				}
				if (!this.moreGamesAdded) this.LoadMoreGames(page);
			});
		this.numPage++;
	}

	static gameDetails(page, url) {
		let urlDetails = url + '?key=dd152cced88e43fabd8ff4e4395448a9';
		fetch(urlDetails)
			.then(response => response.json())
			.then(data => {
				page.jeu = data;
			})
			.then(() => {
				this.gameScreenshots(page, `${url}/screenshots`);
			});
	}

	static gameScreenshots(page, url) {
		let listeFavoris = [];
		url += '?key=dd152cced88e43fabd8ff4e4395448a9';
		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.screenshots = data.results;
			})
			.then(() => {
				page.element.innerHTML = page.render();
			})
			.then(() => {
				console.log(page);
				const button_favorite = document.querySelector(
					'#gameCard-button-favorite'
				);
				let jeux = page.jeux;
				let cliqued = false;
				button_favorite.addEventListener('click', function (event) {
					event.preventDefault();
					const whatIsInLocalStorage = localStorage.getItem('favoris');
					if (whatIsInLocalStorage != null) {
						listeFavoris = JSON.parse(whatIsInLocalStorage);
					}
					/*listeFavoris.forEach(game => {
						if (game.name == page.jeu.name) {
							cliqued = true;
						}
					});*/
					if (
						button_favorite.querySelector('img').getAttribute('src') ==
						'images/fav-clicked.png'
					) {
						cliqued = false;
					} else {
						cliqued = true;
					}

					if (cliqued) {
						console.log('ajout');
						button_favorite
							.querySelector('img')
							.setAttribute('src', 'images/fav-clicked.png');

						listeFavoris.push(jeux[index]);

						localStorage.setItem('favoris', JSON.stringify(listeFavoris));
					} else {
						console.log('retrait');
						button_favorite
							.querySelector('img')
							.setAttribute('src', 'images/fav.png');

						if (whatIsInLocalStorage != null) {
							listeFavoris = JSON.parse(whatIsInLocalStorage);
						}
						let myIndex = 0;
						let i = 0;
						listeFavoris.forEach(game => {
							if (game.name == jeux[index].name) {
								myIndex = i;
							}
							i++;
						});
						listeFavoris.splice(myIndex, 1);
						localStorage.removeItem('favoris');
						localStorage.setItem('favoris', JSON.stringify(listeFavoris));
					}
				});
			});
	}

	static initSortingList(page) {
		const tri = document.querySelectorAll('.tri-item');
		tri[0].addEventListener('click', event => {
			event.preventDefault();
			page.unmount?.();
			Requete.order = '';
		});
		tri[1].addEventListener('click', event => {
			event.preventDefault();
			Requete.order = '&ordering=-released';
		});
		tri[2].addEventListener('click', event => {
			event.preventDefault();
			Requete.order = '&ordering=-metacritic';
		});
		tri.forEach(element =>
			element.addEventListener('click', event => {
				Requete.gameList(
					page,
					`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100${
						Requete.order
					}${Requete.genreOption}${Requete.genres.toString()}`
				);
			})
		);
	}

	static genreList(page) {
		let genreItems = [];
		let i = 0;

		fetch('https://api.rawg.io/api/genres?key=dd152cced88e43fabd8ff4e4395448a9')
			.then(response => response.json())
			.then(data => {
				data.results.forEach(element => {
					genreItems[i] = new GenreItem(element.name, element.slug).render();
					i++;
				});
				document.querySelector('.genreMenu').innerHTML = new GenreList(
					genreItems
				).render();
			})
			.then(e => {
				document.querySelectorAll('.genre-item').forEach(element => {
					element.addEventListener('click', event => {
						if (!Requete.genres.includes(element.id)) {
							Requete.genres.push(element.id);
							document
								.querySelector(`#${element.id}`)
								.setAttribute('class', 'dropdown-item genre-item selected');
						} else {
							Requete.genres = Requete.genres.filter(
								item => item != element.id
							);
							document
								.querySelector(`#${element.id}`)
								.setAttribute('class', 'dropdown-item genre-item');
						}
						if (Requete.genres.length != 0 && Requete.genreOption == '')
							Requete.genreOption = '&genres=';
						else if (Requete.genres.length == 0) Requete.genreOption = '';
						Requete.gameList(
							page,
							`https://api.rawg.io/api/games?page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100${
								Requete.genreOption
							}${Requete.genres.toString()}${Requete.order}`
						);
					});
				});
			});
	}

	static LoadMoreGames(page) {
		Requete.moreGamesAdded = true;
		window.addEventListener(
			'scroll',
			function () {
				const pageUrl = page.element?.baseURI;
				if (
					Math.round($(window).innerHeight() + $(window).scrollTop()) >=
						$('body').height() &&
					pageUrl?.slice(21, pageUrl.length) === '/' &&
					!this.moreGamesAdded
				) {
					Requete.gameList(
						page,
						`https://api.rawg.io/api/games?page=${
							Requete.numPage
						}&page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100${
							Requete.order
						}${Requete.genreOption}${Requete.genres.toString()}`,
						true
					);
				}
			},
			false
		);
	}
}
