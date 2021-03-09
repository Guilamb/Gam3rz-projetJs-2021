import Component from './Component';
import Img from './Img';

export default class jeuThumbnail extends Component {
	constructor({ slug, name, background_image, metacritic }) {
		super(
			'div',
			[{ name: 'class', value: 'col-3 flip-card' }],
			[
				new Component(
					'a',
					[
						{ name: 'class', value: 'flip-card-inner' },
						{ name: 'href', value: `/detail/${slug}` },
					],
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
