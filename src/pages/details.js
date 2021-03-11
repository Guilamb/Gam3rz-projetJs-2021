import Page from '../pages/Page';
import Component from '../components/Component';

export default class Details extends Page {
	constructor() {
		super([
			new Component(
				'h2',
				{ name: 'class', value: 'title' },
				"L'équipe de développement :"
			),
		]);
	}
}
