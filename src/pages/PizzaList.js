import Page from './Page';
import PizzaThumbnail from '../components/PizzaThumbnail';

export default class PizzaList extends Page {
	#pizzas;

	constructor(pizzas) {
		super('pizzaList'); // on pase juste la classe CSS souhaitée
		this.pizzas = pizzas;
	}

	set pizzas(value) {
		this.#pizzas = value;
		this.children = this.#pizzas.map(pizza => new PizzaThumbnail(pizza));
	}

	mount(element) {
		element = fetch('http://localhost:8080/api/v1/pizzas')
			.then(response => response.text())
			.then(responseText => (this.pizzas = JSON.parse(responseText)));

		/*super.mount(element);
		this.element.render();*/
	}
}
