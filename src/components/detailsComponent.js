import Component from './Component';

export default class detailsComponent extends Component {
	constructor() {
		super(
			'div',
			[
				{ name: 'class', value: 'details' },
				{ name: 'id', value: 'test' },
			],
			'Page détails'
		);
	}
}
