export default class Component {
	tagName;
	attribute;
	children;

	constructor(tagName, attribute, children) {
		this.tagName = tagName;
		this.attribute = attribute;
		this.children = children;
	}

	render() {
		let html = `<${this.tagName} ${this.renderAttributes()}`;
		if (this.children) {
			html += `>${this.renderChildren()}</${this.tagName}>`;
		} else {
			html += ' />';
		}

		return html;
	}

	renderAttributes() {
		let attributes = '';
		if (this.attribute instanceof Array) {
			for (let i = 0; i < this.attribute.length; i++) {
				attributes += `${this.attribute[i].name}="${this.attribute[i].value}"`;
			}
		}
		return attributes;
	}

	renderChildren() {
		if (this.children instanceof Array) {
			return this.children.reduce(
				(html, child) =>
					html + (child instanceof Component ? child.render() : child),
				''
			);
		}
		return this.children || '';
	}
}
