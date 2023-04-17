import { OSUICard } from './../card/card.js'

// OSUICardSectioned
export class OSUICardSectioned extends OSUICard {

    // A getter/setter for the orientation property
    get orientation() {
        return this.getAttribute('orientation');
    }

    get imagePadding() {
        return this.getAttribute('image-padding');
    }

    static get observedAttributes() {
        return ['orientation', 'image-padding'];
    }

    attributeChangedCallback() {
        //On attributes change
        console.log(this.orientation);
    }

    constructor() {
        super();

        var shadowRoot = this.shadowRoot;
        var cardContent = shadowRoot.querySelector('.card-content');
        cardContent.innerHTML = `<style>
        
        :host .card {
            background-color: var(--osui-card-sectioned-bg);
            border-radius: var(--osui-card-sectioned-border-radius);
            border: var(--osui-card-sectioned-border-size) solid var(--osui-card-sectioned-border-color);
            padding: 0;
        }

        :host([image-padding="true"]) .card-image {
            padding: var(--space-base) var(--space-base) var(--space-none);
        }

        :host([image-padding="true"][orientation="horizontal"]) .card-image {
            padding: var(--space-base) var(--space-none) var(--space-base) var(--space-base);
        }

        :host([image-padding="false"]) .card-image {
            padding: 0;
        }

        .card-content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0;
        }

        :host([orientation="horizontal"]) .card-content {
            flex-direction: row;
        }

        :host([orientation="horizontal"]) .card-sectioned-top {
            padding: var(--space-base);
        }

        :host([orientation="vertical"]) .card-sectioned-top {
            padding-top: var(--space-base);
        }

        .card-image img {
            display: block;
            margin: 0 auto;
        }

        .card-sectioned-top {
            display: flex;
            flex: 1;
            flex-direction: column;
        }

        .card-title {
            font-size: var(--font-size-h4);
            font-weight: var(--font-semi-bold);
        }

        .card-sectioned-content {
            flex: 1;
            padding: var(--space-base) var(--space-none);
        }

        .card-sectioned-top {
            padding: var(--space-base);
        }

        </style>
        <div class="card-image" part="image"><slot name="image">Insert Your Image</slot></div>
        <div class="card-sectioned-top">
            <div class="card-title" part="title"><slot name="title">Insert Your Title</slot></div>
            <div class="card-sectioned-content" part="content"><slot name="content">Insert Your Content</slot></div>
            <div class="card-bottom" part="bottom"><slot name="bottom">Insert Your Bottom Content</slot></div>
        </div>
        `

    }
}


customElements.define('osui-card-sectioned', OSUICardSectioned);