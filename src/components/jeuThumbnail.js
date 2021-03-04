import Component from './Component';
import Img from './Img';

export default class jeuThumbnail extends Component {
	constructor({ name, background_image, metacritic }) {
		super('div', { name: 'class', value: 'col' }, [
			new Component('div', { name: 'class', value: 'card' }, [
				new Img(background_image),
				new Component('div', { name: 'class', value: 'card-body' }, [
					new Component('h5', { name: 'class', value: 'card-title' }, name),
					new Component(
						'a',
						{ name: 'class', value: 'btn btn-primary' },
						'Add to favorite'
					),
				]),
				new Component(
					'ul',
					{ name: 'class', value: 'list-group list-group-flush' },
					[
						new Component(
							'li',
							{ name: 'class', value: 'list-group-item' },
							'note : ' + metacritic
						),
					]
				),
			]),
		]);
	}
}

/* <figure class="card">

<img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />

<figcaption>Dota 2</figcaption>

</figure> */

// super(
// 	'article',
// 	[{ name: 'class', value: 'jeuThumbnail' }],
// 	[
// 		new Component(
// 			'a',
// 			[
// 				{ name: 'href', value: background_image },
// 				{ name: 'class', value: 'test' },
// 			],
// 			[
// 				new Component(
// 					'img',
// 					[{ name: 'src', value: background_image }],
// 					null
// 				),
// 				new Component('section', null, [new Component('h4', null, name)]),
// 			]
// 		),
// 	]
// );
