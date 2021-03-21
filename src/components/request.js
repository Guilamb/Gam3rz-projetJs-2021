import Router from '../Router.js';
import GenreItem from './GenreItem.js';
import GenreList from './GenreList.js';

export default class Requete {
	static numPage = 1;
	static order = '';
	static genres = [];
	static genreOption = '';
	static initTri = false;
	static initGenre = false;

	static gameList(page, url, add = false) {
		let listeFavoris = [];
		let jeux;

		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.jeux = data.results;
				jeux = data.results;
			})
			.then(() => {
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
						button_favorite.addEventListener('click', function (event) {
							event.preventDefault();

							button_favorite
								.querySelector('img')
								.setAttribute('src', 'images/fav-clicked.png');
							//faut trouver une autre alternative
							/*const imageFavoris = el.querySelector('.flip-card-back .fav');

								if (!imageFavoris.classList.contains('click')) {
									imageFavoris.setAttribute(
										'src',
										'./images/star-fav-clicked.png'
									);
									imageFavoris.classList.add('click');*/
							const whatIsInLocalStorage = localStorage.getItem('favoris');
							if (whatIsInLocalStorage != null) {
								listeFavoris = JSON.parse(whatIsInLocalStorage);
							}

							listeFavoris.push(jeux[index]);
							console.log(listeFavoris);
							console.log(jeux[index]);

							localStorage.setItem('favoris', JSON.stringify(listeFavoris));
							/*
									el.querySelector('.flip-card-front > .fav').setAttribute(
										'src',
										'./images/star-fav-clicked.png'
									);
									el.querySelector('.flip-card-front > .fav').removeAttribute(
										'style'
									);
								} else {
									imageFavoris.setAttribute('src', './images/star-fav.png');
									imageFavoris.classList.remove('click');
									localStorage.removeItem('favoris');
									localStorage.setItem('favoris', listeFavoris);
									el.querySelector('.flip-card-front > .fav').setAttribute(
										'style',
										'visibility:hidden;'
									);
								}*/
						});
					});

				document
					.querySelector('.moreGames')
					.addEventListener('click', event => {
						event.preventDefault();
						Requete.gameList(
							page,
							`https://api.rawg.io/api/games?page=${
								Requete.numPage
							}&page_size=20&dates=2020-01-01,2021-12-31&metacritic=50,100${
								Requete.order
							}${Requete.genreOption}${Requete.genres.toString()}`,
							true
						);
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
				this.LoadMoreGames(page);
			});
		this.numPage++;
	}

	static gameDetails(page, url) {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.jeu = data;
			})
			.then(() => {
				this.gameScreenshots(page, `${url}/screenshots`);
			});
	}

	static gameScreenshots(page, url) {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.screenshots = data.results;
			})
			.then(() => {
				page.element.innerHTML = page.render();
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

		fetch('https://api.rawg.io/api/genres')
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
		window.addEventListener(
			'scroll',
			function () {
				//event.preventDefault();
				console.log(
					Math.round($(window).innerHeight() + $(window).scrollTop()) +
						' : ' +
						$('body').height()
				);
				if (
					Math.round($(window).innerHeight() + $(window).scrollTop()) ==
					$('body').height()
				) {
					alert('End');
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
