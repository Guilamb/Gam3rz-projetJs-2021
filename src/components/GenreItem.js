import Component from './Component.js'

export default class GenreItem extends Component {

    constructor(genre, slug) {
        super('a', [{ name: 'class', value: 'dropdown-item genre-item' }, { name: 'id', value: slug }], genre);
    }
}