import { OSUICard } from '../card/card';
//@ts-ignore
import css from './card.scss'

// OSUICardSectioned
export class OSUICardSectioned extends OSUICard {
    private _shadowRoot: ShadowRoot;

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
        // On attributes change
        console.log(this.orientation);
    }

    constructor() {
        super();

        // Get extended Card element
        this._shadowRoot = this.shadowRoot;
        var cardContent = this._shadowRoot.querySelector('.card-content');

        // Create CSS stylesheet from scss file and append to shadowDOM
        const cardStyleSheet = document.createElement('style');
        cardStyleSheet.appendChild(document.createTextNode(css));
        this.shadowRoot.appendChild(cardStyleSheet);

        // Add cardSectioned html
        cardContent.innerHTML = `
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