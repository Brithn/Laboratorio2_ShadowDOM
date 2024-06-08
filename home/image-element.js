document.addEventListener('DOMContentLoaded', () => {
    class ImageCardElement extends HTMLElement {
        constructor() {
            super();
            this.shadowDOM = this.attachShadow({ mode: 'open' });
        }

        static get observedAttributes() {
            return ['img-src', 'title', 'description'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            this.render();
        }

        connectedCallback() {
            this.mapComponentAttributes();
            this.render();
        }

        mapComponentAttributes() {
            const attributeMapping = ['img-src', 'title', 'description'];

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
                <div class="card">
                    <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="Image">
                </div>
            `;
        }

        templateCss() {
            return `
                <style>
                    .card {
                        width: 18rem;
                        margin: 1rem;
                        border: 1px solid #ddd;
                        border-radius: 0.25rem;
                        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
                    }
                    .card img {
                        width: 100%;
                        height: auto;
                        border-top-left-radius: 0.25rem;
                        border-top-right-radius: 0.25rem;
                    }
                </style>
            `;
        }

        disconnectedCallback() {
            this.remove();
        }
    }

    customElements.define('image-card', ImageCardElement);
});