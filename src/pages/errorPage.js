import Page from './Page';

export default class errorPage extends Page {
	constructor() {
		super();
	}

	render() {
		return `<link rel="stylesheet" type="text/css" href="css/errorPage.css" />
                <div> <img src="https://thingmill.fr/img/404.gif"> </div>`;
	}
}
