// OSUICard
export class OSUICard extends HTMLElement {

    get padding() {
        return this.getAttribute('padding');
    }

    get background() {
        return this.getAttribute('background');
    }
    
    static get observedAttributes() {
        return ['background','padding'];
    }

    constructor() {
        super();

        var shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<style>
        .card {
            background: var(--osui-card-bg);
            background: ${this.background};
            border-radius: var(--osui-card-border-radius);
            border: var(--osui-card-border-size) solid var(--osui-card-border-color);
            padding: var(--osui-card-padding);
            padding: ${this.padding};
        }

        </style>
        <div class="card">
        <div class="card-content" part="content"><slot>Insert Your Content</slot</div>
          </div>
        `                            
    }
}

customElements.define('osui-card', OSUICard);