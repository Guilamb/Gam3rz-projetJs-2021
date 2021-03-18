import Page from './Page';
import Member from '../components/Member';
import Component from '../components/Component';

export default class Lequipe extends Page {
	constructor() {
		super([
			new Component(
				'h2',
				{ name: 'class', value: 'title' },
				"L'équipe de développement :"
			),
			new Member(
				'Antoine',
				'Martinsse',
				'CorwynJ',
				'Kirby Super Star Ultra',
				'100%'
			),
			new Member('Aubrian', 'Duhayon', 'Skyeaaa', 'Dying Light', '4000%'),
			new Member('Guilhane', 'Bourgoin', 'Guilamb', 'Hollow Knight', '100%'),
			new Member(
				'Thomas',
				'Prunier',
				'CosmicRadiocity',
				'The Legend of Zelda The Wind Waker',
				'100%'
			),
		]);
	}
}