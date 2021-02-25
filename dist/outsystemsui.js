!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML='<style>\n        .card {\n            background: var(--osui-card-bg);\n            border-radius: var(--osui-card-border-radius);\n            border: var(--osui-card-border-size) solid var(--osui-card-border-color);\n            padding: var(--osui-card-padding);\n        }\n        \n       .card-content {\n            flex: var(--osui-card-content-flex);\n        }\n\n        </style>\n        <div class="card">\n          <div class="card-content" part="content">Hello</div>\n          </div>\n        '}}customElements.define("osui-card",n)},function(t,e,n){"use strict";n.r(e);n(0);const i=document.createElement("template");i.innerHTML='\n<style>\n/*tag styles*/\n:host {\n    border-radius: 8px;\n    border: 3px solid #ff584f;\n    padding: 8px 16px;\n}\n\n:host(.blue) {\n    border: 3px solid #3d6fb4;\n}\n\n:host-context(main) {\n    border: 3px solid #e3e3e3;\n    border-radius: 8px;\n    padding: 8px 16px;\n}\n\ndiv {\n    display: flex;\n    justify-content: center;\n    flex-direction: row-reverse;\n}\nimg {\n    width: 60px;\n    height: 60px;\n    margin: 10px;\n}\np, ::slotted(p) {\n    text-align: center;\n    font-size: 32px;\n    margin: 0;\n    padding: 0;\n}\n/*  This slot will be disabled because it´s only used as a template for the rating stars \n    and have no functionality */\nslot[name="rating-star"] {\n   display: none; \n}\n/*class styles*/\n.rating-item {\n    filter: grayscale(100%);\n    cursor: pointer;\n}\n.rating-item.selected {\n    filter: none;\n}\n.rating-item:hover, .rating-item:hover ~ .rating-item {\n    filter: none;\n}\n.rating-star {\n    display: block;\n    -webkit-mask-image: url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 166"><polygon fill="rgb(165,255,214)" points="83 26.8 65.7 61.8 27.1 67.4 55 94.7 48.5 133.2 83 115 117.5 133.2 111 94.7 138.9 67.4 100.3 61.8 83 26.8 83 26.8"/></svg>\');\n    background-color: #3d6fb4;\n    -webkit-mask-repeat: no-repeat;\n    -webkit-mask-position: center center;\n    width: 80px;\n    height: 80px;\n}\n</style>\n<slot>\n      <p part="title">Rating Web Component</p>\n</slot>\n<div>\n    <slot name="rating-star">\n        <div part="icon" class="rating-star"></div>\n    </slot>\n</div>\n';class r extends HTMLElement{static get observedAttributes(){return["rating","max-rating"]}constructor(){super();const t=this.attachShadow({mode:"closed"});t.appendChild(i.content.cloneNode(!0)),this.element=t.querySelector("div");const e=this.element.querySelector("slot");this.slotNode=e.querySelector("div"),e.addEventListener("slotchange",t=>{const n=e.assignedNodes()[0];n&&(this.slotNode=n,this.render())})}get ratingName(){return this.getAttribute("rating-name")}set ratingName(t){this.setAttribute("rating-name",t)}get maxRating(){return+this.getAttribute("max-rating")}set maxRating(t){this.setAttribute("max-rating",t)}get rating(){return+this.getAttribute("rating")}set rating(t){if(t<0)throw new Error("The rating must be higher than zero.");if(+t>this.maxRating)throw new Error("The rating must be lower than the maximum.");this.setAttribute("rating",t)}connectedCallback(){if(this.maxRating){if(this.maxRating<0)throw new Error("The rating must be higher than zero.")}else this.maxRating=5;if(this.rating){if(this.rating<0||this.rating>this.maxRating)throw new Error("The rating must be higher than zero and lower than the maximum.")}else this.rating=0;this.dispatchEvent(new CustomEvent("ratingChanged",{detail:this.rating})),this.render()}attributeChangedCallback(t,e,n){if(e!==n)switch(t){case"rating":this.rating=n,this.updateRating();break;case"max-rating":this.maxRating=n,this.render()}}render(){this.clearRatingElements();for(let t=this.maxRating;t>0;t--){t=parseInt(t);const e=!!this.rating&&this.rating>=t;this.createRatingStar(e,t)}}clearRatingElements(){const t=this.element.getElementsByClassName("rating-item");if(t)for(;t.length>0;)t[0].parentNode.removeChild(t[0])}createRatingStar(t,e){const n=document.createElement("div");n.setAttribute("class",t?`rating-item item-${e} selected`:"rating-item item-"+e),n.appendChild(this.slotNode.cloneNode(!0)),n.addEventListener("click",t=>{this.changeRating(e)}),this.element.appendChild(n)}changeRating(t){this.rating=t,this.updateRating(),this.dispatchEvent(new CustomEvent("ratingChanged",{detail:this.rating}))}updateRating(){for(let t=1;t<=this.maxRating;t++){let e=this.element.getElementsByClassName("item-"+t)[0];e&&(t<=this.rating?e.className.indexOf("selected")<0&&(e.className=e.className+" selected"):e.className=e.className.replace("selected",""))}}}window.customElements.define("my-rating",r)}]);