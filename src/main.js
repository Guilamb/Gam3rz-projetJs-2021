import Router from './Router';
import data from './data';
import PizzaList from './pages/PizzaList';
import PizzaForm from './pages/PizzaForm';
import Component from './components/Component';

const pizzaList = new PizzaList([]),
	aboutPage = new Component('p', null, 'ce site est génial'),
	pizzaForm = new PizzaForm();

Router.titleElement = document.querySelector('.pageTitle');
Router.contentElement = document.querySelector('.pageContent');
Router.menuElement = document.querySelector('.mainMenu');
Router.routes = [
	{ path: '/', page: pizzaList, title: 'La carte' },
	{ path: '/a-propos', page: aboutPage, title: 'À propos' },
	{ path: '/ajouter-pizza', page: pizzaForm, title: 'Ajouter une pizza' },
];

// Router.navigate('/'); // affiche une page vide
pizzaList.pizzas = data;
// Router.navigate('/'); // affiche la liste des pizzas

// B.1. Sélectionner des éléments
// console.log(document.querySelector('.logo img'));
// console.log(document.querySelector('.pizzaFormLink'));
// console.log(document.querySelector('.pizzaThumbnail h4'));

// console.log(document.querySelectorAll('.mainMenu a'));
// console.log(document.querySelectorAll('.pizzaThumbnail li'));

// B.2
document.querySelector(
	'.logo'
).innerHTML += `<small>les pizzas c'est la vie</small>`;
// const pizzaListLink = document.querySelector('.mainMenu .pizzaListLink');
// pizzaListLink.setAttribute(
// 	'class',
// 	pizzaListLink.getAttribute('class') + ' active'
// );

// C.2. Navigation en JS : afficher/masquer un élément
const newsContainer = document.querySelector('.newsContainer'),
	closeButton = newsContainer.querySelector('.closeButton');
// affichage du bandeau de news
newsContainer.style.display = '';
// gestion du bouton fermer
closeButton.addEventListener('click', event => {
	event.preventDefault();
	newsContainer.style.display = 'none';
});

// E.3. Deeplinking
// détection des boutons précédent/suivant du navigateur :
// on lit l'url courante dans la barre d'adresse et on l'envoie au Router
window.onpopstate = () => Router.navigate(document.location.pathname, false);
// affichage de la page initiale :
// même traitement que lors de l'appui sur les boutons précédent/suivant
window.onpopstate();
