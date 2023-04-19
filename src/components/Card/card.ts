import { css } from './css';
import { html } from './html';

// OSUICard
export class OSUICard extends HTMLElement {

    protected clickCallback: () => void;

    get padding() {
        return this.getAttribute('padding');
    }

    get background() {
        return this.getAttribute('background');
    }

    static get observedAttributes() {
        return ['background', 'padding'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === 'undefined') {
            return;
        }

        switch (name) {
            case 'padding':
                this.style.setProperty('--osui-card-padding', newValue);
                break;
            case 'background':
                this.style.setProperty('--osui-card-bg', newValue);
                break;
        }
    }

    connectedCallback(): void {
        this.addEventListener('click', () => {
            const originalHTML = this.innerHTML;
            this.innerHTML = 'clicked';
            if (this.clickCallback !== undefined) {
                this.clickCallback();
            }
            setTimeout(() => {
                this.innerHTML = originalHTML;
            }, 0);

        });
    }

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `<style>${css}</style>${html}`;
        shadowRoot.appendChild(template.content.cloneNode(true));
    };

    public registerCallback(callback): void {
        this.clickCallback = callback;
    }

}

customElements.define('osui-card', OSUICard);

