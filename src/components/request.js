import Router from '../Router.js';

export default class Requete {
	static numPage = 1;

	static initFetch(page, url) {
		let listeFavoris = [];
		let jeux;

		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.jeux = data.results;
				jeux = data.results;
			})
			.then(() => {
				page.element.innerHTML = page.render();
			})
			.then(() => {
				document
					.querySelectorAll('.col-3.flip-card' /*'.flip-card-inner'*/)
					.forEach((el, index) => {
						el.querySelector('.flip-card-back > button').addEventListener(
							'click',
							function (event) {
								event.preventDefault();
								const imageFavoris = el.querySelector('.flip-card-back .fav');

								if (!imageFavoris.classList.contains('click')) {
									imageFavoris.setAttribute(
										'src',
										'./images/star-fav-clicked.png'
									);
									imageFavoris.classList.add('click');

									listeFavoris.push(jeux[index]);
									//el.querySelector('.card-title').innerText + ' ';
									console.log(listeFavoris);
									console.log(jeux[index]);

									localStorage.setItem('favoris', JSON.stringify(listeFavoris));

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
								}
							}
						);
					});
			})
			.then(() => {
				document.querySelectorAll('.wrapper a').forEach(link => {
					link.addEventListener('click', event => {
						event.preventDefault();
						Router.navigate(link.getAttribute('href'), true);
					});
				});
			});
		this.numPage++;
	}

	static addNewGames(page, url) {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.jeux = data.results;
			})
			.then(() => {
				page.element.innerHTML += page.render();
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
			})
			.then(() => {
				document.querySelectorAll('.wrapper a').forEach(link => {
					link.addEventListener('click', event => {
						event.preventDefault();
						Router.navigate(link.getAttribute('href'), true);
					});
				});
			});

		this.numPage++;
	}

	static initDetails(page, url) {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.jeu = data;
			})
			.then(() => {
				page.element.innerHTML = page.render();
			});
	}
}
