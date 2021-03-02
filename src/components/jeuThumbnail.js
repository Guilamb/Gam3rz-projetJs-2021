import Component from 'Component.js';
import Img from './Img';

export default class jeuThumbnail extends Component {
    constructor({ image, title, note }) {
        super('article', {name: 'class', valu:'jeuThumbnail'}, [
            new Component('a', { name:'href', value:image }, [
                new Img(image),
                new Component('section', null, [
                    new Component('h4', null, title),
                    new Component('h4', null, note),
                ]),
            ]),
        ]);
    }
}