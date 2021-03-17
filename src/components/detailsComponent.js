import Component from './Component';

export default class detailsComponent extends Component {
	constructor({ name, description }) {
		super(
			'div',
			[
				{ name: 'class', value: 'details' },
				{ name: 'id', value: 'test' },
			],
			[`Page détails de ${name}`, `${description}`]
		);
	}
}
