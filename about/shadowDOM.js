
  class Breadcrumbs extends HTMLElement {
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
            'separator',
        ];
        
        attributeMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = { value: '/' }; // Default separator
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
        const items = Array.from(this.querySelectorAll('li')).map((item, index, arr) => {
            const separator = index < arr.length - 1 ? this.attributes.separator.value : '';
            return `<li>${item.innerHTML}${separator}</li>`;
        }).join('');

        return `
            <nav class="breadcrumbs">
                <div class="container">
                    <ol>
                        ${items}
                    </ol>
                </div>
            </nav>
        `;
    }

    templateCss() {
        return `
            <style>
                .breadcrumbs {
                    padding: 10px 0;
                    background-color: #f5f5f5;
                }
                .breadcrumbs .container {
                    display: flex;
                }
                .breadcrumbs ol {
                    list-style: none;
                    display: flex;
                    padding: 0;
                    margin: 0;
                }
                .breadcrumbs li {
                    margin-right: 10px;
                }
                .breadcrumbs li::after {
                    content: '';
                }
                .breadcrumbs li a {
                    text-decoration: none;
                    color: #007bff;
                }
                .breadcrumbs .current {
                    font-weight: bold;
                }
            </style>
        `;
    }
}

window.customElements.define('breadcrumbs-nav', Breadcrumbs);

