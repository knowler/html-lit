import { LitElement, css, html } from "lit";

export class AnchorElement extends LitElement {
	static styles = css`
		:host([href]) {
			color: LinkText;
			text-decoration: underline;
		}
	`;

	static properties = {
		_url: { state: true },

		href: {
			converter: {
				toAttribute(value, type) {},
				fromAttribute(value, type) {
					console.log(value, type);
				},
			},
		},

		hash: { attribute: false },
		host: { attribute: false },
		hostname: { attribute: false },
		origin: { attribute: false }, /* Read-only */
		password: { attribute: false },
		pathname: { attribute: false },
		ping: { attribute: false },
		port: { attribute: false },
		protocol: { attribute: false },
		search: { attribute: false },
		username: { attribute: false },

		text: { attribute: false },

		hreflang: { reflect: true },
		download: { reflect: true },
		ping: { reflect: true },
		//referrerPolicy: {},
		//rel: {},
		//relList: { attribute: false },
		target: { reflect: true },
		type: { reflect: true },
	};

	#internals;
	#url;

	constructor() {
		super();
		this.#internals = this.attachInternals();
		this.#internals.role = "generic";
	}

	render() {
		return html`<slot></slot>`;
	}
}

if (new URL(import.meta.url).searchParams.has("define")) {
	customElements.define("lit-a", AnchorElement);
}
