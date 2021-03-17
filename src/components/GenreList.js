import Component from './Component.js'

export default class GenreList extends Component {

    constructor(genreitems) {
        super('div', [{ name: 'class', value: 'dropdown-content' }], genreitems);
    }

}