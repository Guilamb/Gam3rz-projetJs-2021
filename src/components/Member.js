import Component from './Component';

export default class Member extends Component {
	constructor(prenom, nom, pseudo, jeuPref, note) {
		super(
			'div',
			[{ name: 'class', value: 'member' }],
			[
				new Component(
					'h6',
					[{ name: 'class', value: 'nom' }],
					`${prenom} ${nom} ${pseudo}`
				),
				new Component(
					'h6',
					[{ name: 'class', value: 'jeupref' }],
					`Son jeu préféré est ${jeuPref}`
				),
				new Component(
					'h6',
					[{ name: 'class', value: 'note' }],
					`Il mérite un bon ${note} de la note`
				),
			]
		);
	}
}
