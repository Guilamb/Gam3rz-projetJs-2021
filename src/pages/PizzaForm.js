import Router from '../Router.js';
import Page from './Page.js';

export default class AddPizzaPage extends Page {
	render() {
		return /*html*/ `
			<form class="pizzaForm">
				<label>
					Nom :
					<input type="text" name="name">
				</label>
				<button type="submit">Ajouter</button>
			</form>`;
	}

	mount(element) {
		super.mount(element);
		const form = this.element.querySelector('.pizzaForm');
		form.addEventListener('submit', event => {
			event.preventDefault();
			this.submit();
		});
	}
	ajoutPizza(name) {
		console.log('ok');
		const pizza = {
			name: name,
		};
		fetch('http://localhost:8080/api/v1/pizzas', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(pizza),
		}).then(response => {
			alert(`La pizza ${name} a été ajoutée !`);
			Router.navigate('/');
		});
	}

	submit() {
		// D.4. La validation de la saisie
		const nameInput = this.element.querySelector('input[name="name"]'),
			name = nameInput.value;
		if (name === '') {
			alert('Erreur : le champ "Nom" est obligatoire');
			return;
		}
		this.ajoutPizza(name);

		nameInput.value = '';
	}
}
