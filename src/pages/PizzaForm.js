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

	submit() {
		// D.4. La validation de la saisie
		const nameInput = this.element.querySelector('input[name="name"]'),
			name = nameInput.value;
		if (name === '') {
			alert('Erreur : le champ "Nom" est obligatoire');
			return;
		}
		alert(`La pizza ${name} a été ajoutée !`);
		nameInput.value = '';
	}
}
