document.addEventListener('DOMContentLoaded', () => {
    class FooterElement extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            this.render();
        }

        render() {
            if (this.shadowRoot.innerHTML !== '') {
                return;
            }
            const template = document.createElement('template');
            template.innerHTML = `
                <style>
                    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
                    .footer {
                        background-color: #000;
                        color: #fff;
                        padding: 20px 0;
                        text-align: center;
                    }
                    .footer a {
                        color: #28a745;
                        text-decoration: none;
                    }
                    .footer .social-icons a {
                        margin: 0 10px;
                        color: #fff;
                        font-size: 1.5rem;
                    }
                    .footer .social-icons a:hover {
                        color: #28a745;
                    }
                </style>
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                            <hr>
                                <p>&copy; Copyright <span>${this.getAttribute('footer-text')}</span> All Rights Reserved</p>
                            </div>
                            <div class="col-12">
                                <div class="social-icons">
                                    <a href="${this.getAttribute('icon1-href')}"><i class="${this.getAttribute('icon1-class')}"></i></a>
                                    <a href="${this.getAttribute('icon2-href')}"><i class="${this.getAttribute('icon2-class')}"></i></a>
                                    <a href="${this.getAttribute('icon3-href')}"><i class="${this.getAttribute('icon3-class')}"></i></a>
                                    <a href="${this.getAttribute('icon4-href')}"><i class="${this.getAttribute('icon4-class')}"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            `;

            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define('footer-element', FooterElement);
});
