import Component from './Component';
import Img from './Img';

export default class jeuThumbnail extends Component {
	constructor({ name, background_image, metacritic }) {
		super(
			'div',
			[{ name: 'class', value: 'col-3 flip-card' }],
			[
				new Component(
					'div',
					[{ name: 'class', value: 'flip-card-inner' }],
					[
						new Component(
							'div',
							[{ name: 'class', value: 'flip-card-front' }],
							[
								new Img(background_image),
								new Component('img', [
									{ name: 'class', value: 'fav' },
									{ name: 'style', value: 'visibility: hidden' },
								]),
							]
						),

						new Component(
							'div',
							[{ name: 'class', value: 'flip-card-back' }],
							[
								new Component(
									'h6',
									[{ name: 'class', value: 'card-title' }],
									name
								),
								new Component(
									'button',
									[{ name: 'type', value: 'button' }],
									[
										'....',
										new Component(
											'img',
											[
												{ name: 'class', value: 'fav' },
												{
													name: 'src',
													value: './images/star-fav.png',
												},
											],
											null
										),
									]
								),
								new Component(
									'section',
									[
										{ name: 'class', value: 'progress-circle' },
										{ name: 'value', value: '30' },
									],
									[
										new Component(
											'div',
											[{ name: 'class', value: 'progress-masque' }],
											[
												new Component(
													'div',
													[{ name: 'class', value: 'progress-barre' }],
													[null]
												),
												new Component(
													'div',
													[{ name: 'class', value: 'progress-sup50' }],
													null
												),
											]
										),
									]
								),
							]
						),
					]
				),
			]
		);
	}
}
