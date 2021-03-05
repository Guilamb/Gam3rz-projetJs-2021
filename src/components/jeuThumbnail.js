import Component from './Component';
import Img from './Img';

export default class jeuThumbnail extends Component {
	constructor({ name, background_image, metacritic }) {
		super(
			'div',
			[{ name: 'class', value: 'col-3' }],
			[
				new Component(
					'div',
					[{ name: 'class', value: 'card' }],
					[
						new Img(background_image),
						new Component(
							'div',
							[{ name: 'class', value: 'card-body' }],
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
									'ul',
									[{ name: 'class', value: 'list-group list-group-flush' }],
									[
										new Component(
											'li',
											[{ name: 'class', value: 'list-group-item' }],
											`note : ${metacritic}`
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
