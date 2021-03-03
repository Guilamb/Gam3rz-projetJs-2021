import Component from '../components/Component';

export default class Page extends Component {
	element;

	constructor(children) {
		super('div', { name: 'class', value: 'row align-items-start' }, children);
	}
	mount(element) {
		this.element = element;
	}
}
