import Router from '../Router.js';
import details from '../pages/details.js';

export default class Requete {
	static numPage = 1;

	static initFetch(page, url) {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				page.jeux = data.results;
			})
			.then(() => {
				page.element.innerHTML = page.render();
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
