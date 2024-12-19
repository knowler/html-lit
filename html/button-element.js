import { LitElement, css, html } from "lit";

export class ButtonElement extends LitElement {
	#internals;

	constructor() {
		super();
		this.#internals = this.attachInternals();
		this.#internals.role = "button";
	}

	render() {
		return html`<slot></slot>`;
	}
}

if (new URL(import.meta.url).searchParams.has("define")) {
	customElements.define("lit-button", ButtonElement);
}
