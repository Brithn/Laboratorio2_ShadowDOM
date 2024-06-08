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
                'link3-text',
                'link3-href',
                'link4-text',
                'link4-href',
                'icon1-class',
                'icon1-href',
                'icon2-class',
                'icon2-href',
                'icon3-class',
                'icon3-href',
                'icon4-class',
                'icon4-href'
            ];

            attributeMapping.forEach(key => {
                if (!this.hasAttribute(key)) {
                    this.setAttribute(key, '');
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
                    <div class="logo">
                        <i class="fas fa-camera"></i> ${this.getAttribute('logo-text')}
                    </div>
                    <nav>
                        <a href="${this.getAttribute('link1-href')}">${this.getAttribute('link1-text')}</a>
                        <a href="${this.getAttribute('link2-href')}">${this.getAttribute('link2-text')}</a>
                        <a href="${this.getAttribute('link3-href')}">${this.getAttribute('link3-text')}</a>
                        <a href="${this.getAttribute('link4-href')}">${this.getAttribute('link4-text')}</a>
                    </nav>
                    <div class="social-icons">
                        <a href="${this.getAttribute('icon1-href')}"><i class="${this.getAttribute('icon1-class')}"></i></a>
                        <a href="${this.getAttribute('icon2-href')}"><i class="${this.getAttribute('icon2-class')}"></i></a>
                        <a href="${this.getAttribute('icon3-href')}"><i class="${this.getAttribute('icon3-class')}"></i></a>
                        <a href="${this.getAttribute('icon4-href')}"><i class="${this.getAttribute('icon4-class')}"></i></a>
                    </div>
                </header>
            `;
        }

        templateCss() {
            return `
                <style>
                    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
                    header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 10px 20px;
                        background-color: ${this.getAttribute('background-color') || '#000000'};
                        font-family: Serif;
                    }
                    .logo {
                        font-size: 1.5em;
                        color: #fff;
                        display: flex;
                        align-items: center;
                    }
                    .logo i {
                        margin-right: 10px;
                        color: green;
                    }
                    nav a {
                        color: #fff;
                        text-decoration: none;
                        margin-left: 15px;
                        font-size: 1.3em; 
                    }
                    .social-icons a {
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
