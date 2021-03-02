import Component from './Component';
import Img from './Img';

export default class jeuThumbnail extends Component {
	constructor({ name, background_image }) {
		super('article', { name: 'class', value: 'jeuThumbnail' }, [
			new Component('a', { name: 'href', value: background_image }, [
				new Img(background_image),
				new Component('section', null, [new Component('h4', null, name)]),
			]),
		]);
	}
}
