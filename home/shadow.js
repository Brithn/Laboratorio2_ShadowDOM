document.addEventListener('DOMContentLoaded', () => {
    class HeaderElement extends HTMLElement {
        constructor() {
            super();
            this.shadowDOM = this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            this.mapComponentAttributes();
            this.render();
        }

        mapComponentAttributes() {
            const attributeMapping = [
                'logo-text',
                'background-color',
                'link1-text',
                'link1-href',
                'link2-text',
                'link2-href',
            ];

            attributeMapping.forEach(key => {
                if (!this.attributes[key]) {
                    this.attributes[key] = { value: '' };
                }
            });
        }

        render() {
            this.shadowDOM.innerHTML = `
                ${this.templateCss()}
                ${this.template()}
            `;
        }

        template() {
            return `
                <header>
                    <div class="logo">${this.attributes['logo-text'].value}</div>
                    <nav>
                        <a href="${this.attributes['link1-href'].value}">${this.attributes['link1-text'].value}</a>
                        <a href="${this.attributes['link2-href'].value}">${this.attributes['link2-text'].value}</a>
                    </nav>
                </header>
            `;
        }

        templateCss() {
            return `
                <style>
                    header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 20px;
                        background-color: ${this.attributes['background-color'].value || '#000000'};
                    }
                    .logo {
                        font-size: 1.5em;
                        color: #fff;
                    }
                    nav a {
                        color: #fff;
                        text-decoration: none;
                        margin-left: 15px;
                        font-size: 1.3em; 
                    }
                </style>
            `;
        }

        disconnectedCallback() {
            this.remove();
        }
    }

    customElements.define('header-element', HeaderElement);
});
