(()=>{"use strict";var n={977:(n,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OSUICard=void 0;class e extends HTMLElement{get padding(){return this.getAttribute("padding")}get background(){return this.getAttribute("background")}static get observedAttributes(){return["background","padding"]}constructor(){super(),this.clickCallback=void 0,this.registerCallback=function(n){this.clickCallback=n},this.addEventListener("click",(()=>{console.log("click"),this.clickCallback()})),this.attachShadow({mode:"open"}).innerHTML=`<style>\n        .card {\n            background: var(--osui-card-bg);\n            background: ${this.background};\n            border-radius: var(--osui-card-border-radius);\n            border: var(--osui-card-border-size) solid var(--osui-card-border-color);\n            padding: var(--osui-card-padding);\n            padding: ${this.padding};\n        }\n\n        </style>\n        <div class="card">\n        <div class="card-content" part="content"><slot>Insert Your Content</slot</div>\n          </div>\n        `}}t.OSUICard=e,customElements.define("osui-card",e)},110:(n,t,e)=>{const a=e(977);class r extends a.OSUICard{get orientation(){return this.getAttribute("orientation")}get imagePadding(){return this.getAttribute("image-padding")}static get observedAttributes(){return["orientation","image-padding"]}attributeChangedCallback(){console.log(this.orientation)}constructor(){super(),this.shadowRoot.querySelector(".card-content").innerHTML='<style>\n        \n        :host .card {\n            background-color: var(--osui-card-sectioned-bg);\n            border-radius: var(--osui-card-sectioned-border-radius);\n            border: var(--osui-card-sectioned-border-size) solid var(--osui-card-sectioned-border-color);\n            padding: 0;\n        }\n\n        :host([image-padding="true"]) .card-image {\n            padding: var(--space-base) var(--space-base) var(--space-none);\n        }\n\n        :host([image-padding="true"][orientation="horizontal"]) .card-image {\n            padding: var(--space-base) var(--space-none) var(--space-base) var(--space-base);\n        }\n\n        :host([image-padding="false"]) .card-image {\n            padding: 0;\n        }\n\n        .card-content {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            padding: 0;\n        }\n\n        :host([orientation="horizontal"]) .card-content {\n            flex-direction: row;\n        }\n\n        :host([orientation="horizontal"]) .card-sectioned-top {\n            padding: var(--space-base);\n        }\n\n        :host([orientation="vertical"]) .card-sectioned-top {\n            padding-top: var(--space-base);\n        }\n\n        .card-image img {\n            display: block;\n            margin: 0 auto;\n        }\n\n        .card-sectioned-top {\n            display: flex;\n            flex: 1;\n            flex-direction: column;\n        }\n\n        .card-title {\n            font-size: var(--font-size-h4);\n            font-weight: var(--font-semi-bold);\n        }\n\n        .card-sectioned-content {\n            flex: 1;\n            padding: var(--space-base) var(--space-none);\n        }\n\n        .card-sectioned-top {\n            padding: var(--space-base);\n        }\n\n        </style>\n        <div class="card-image" part="image"><slot name="image">Insert Your Image</slot></div>\n        <div class="card-sectioned-top">\n            <div class="card-title" part="title"><slot name="title">Insert Your Title</slot></div>\n            <div class="card-sectioned-content" part="content"><slot name="content">Insert Your Content</slot></div>\n            <div class="card-bottom" part="bottom"><slot name="bottom">Insert Your Bottom Content</slot></div>\n        </div>\n        '}}customElements.define("osui-card-sectioned",r)}},t={};function e(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return n[a](o,o.exports,e),o.exports}e(977),e(110)})();