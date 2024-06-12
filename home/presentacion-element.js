//Custom Element
document.addEventListener('DOMContentLoaded', () => {
    class PresentationElement extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            this.mapComponentAttributes();
            this.render();
        }

        mapComponentAttributes() {
            const attributeMapping = [
                'heading-text',
                'subheading-text',
                'description-text',
                'button-text',
                'button-href'
            ];

            attributeMapping.forEach(key => {
                if (!this.hasAttribute(key)) {
                    this.setAttribute(key, '');
                }
            });
        }

        render() {
            this.innerHTML = `1
                ${this.templateCss()}
                ${this.template()}
            `;
        }

        template() {
            return `
                <div class="presentation">
                    <br>
                    <h1 class= "underlight">${this.getAttribute('heading-text')}</h1>
                    <h2>${this.getAttribute('subheading-text')}</h2>
                    <p>${this.getAttribute('description-text')}</p>
                    <a class="cta-button" href="${this.getAttribute('button-href')}">${this.getAttribute('button-text')}</a>
                </div>
            `;
        }

        templateCss() {
            return `
                <style>
                    .presentation {
                        text-align: center;
                        padding: 50px 20px;
                        color: #fff;
                        background-color: #000;
                    }
                    .presentation h1 {
                        font-size: 2.5em;
                        margin: 0;
                        position: relative;
                        display: inline-block;
                    }
                    .underlight::after {
                        content: '';
                        position: absolute;
                        width: 100%;
                        left: 0;
                        padding: 0.5px;
                        bottom: 0;
                        height: 4px;
                        background-color: #27a776;
                        transform: scalex(0);
                        transform-origin: bottom right;
                        transition: transform 0.6s ease-out;
                    }
                    .underlight:hover:after {
                        transform: scalex(1);
                        transform-origin: bottom left;
                    
                    }

                    .presentation h2 {
                        font-size: 2em;
                        margin: 10px 0;
                    }
                    
                    .presentation p {
                        font-size: 1.2em;
                        margin: 20px 0;
                    }
                    .cta-button {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #27a776;
                        color: #fff;
                        text-decoration: none;
                        font-size: 1.2em;
                        border-radius: 5px;
                    }
                    .cta-button:hover {
                        background-color: #218838;
                    }
                </style>
            `;
        }

        disconnectedCallback() {
            this.remove();
        }
    }

    customElements.define('presentation-element', PresentationElement);
});
