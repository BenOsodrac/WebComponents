// OSUICard
class OSUICard extends HTMLElement {

    constructor() {
        super();

        var shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<style>
        .card {
            background: var(--osui-card-bg);
            border-radius: var(--osui-card-border-radius);
            border: var(--osui-card-border-size) solid var(--osui-card-border-color);
            padding: var(--osui-card-padding);
        }
        
       .card-content {
            flex: var(--osui-card-content-flex);
        }

        </style>
        <div class="card">
          <div class="card-content" part="content">Hello</div>
          </div>
        `                            
    }
}

customElements.define('osui-card', OSUICard);