import { css } from './css';
import { html } from './html';

// OSUICard
export class OSUICard extends HTMLElement {

    private _clickCallback: () => void;

    get padding() {
        return this.getAttribute('padding');
    }

    get background() {
        return this.getAttribute('background');
    }

    static get observedAttributes() {
        return ['background', 'padding'];
    }

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>${html}`;
        shadowRoot.appendChild(template.content.cloneNode(true));
    };

    connectedCallback(): void {
        this.addEventListener('click', () => {
            this._clickCallback();
        });
    }

    public registerCallback(callback): void {
        this._clickCallback = callback;
    }

}

customElements.define('osui-card', OSUICard);

