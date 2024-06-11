class MyCard extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    getAttributeOrDefault(attributeName, defaultValue = '') {
        return this.getAttribute(attributeName) || defaultValue;
    }

    render() {
        const template = document.getElementById('my-card-template');
        const templateContent = template.content.cloneNode(true);

        const title = this.getAttributeOrDefault('title');
        const description = this.getAttributeOrDefault('description');
        const image = this.getAttributeOrDefault('image');

        templateContent.querySelector('h2').textContent = title;
        templateContent.querySelector('p').textContent = description;
        templateContent.querySelector('img').setAttribute('src', image);

        this.shadowDOM.appendChild(templateContent);
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('my-card', MyCard);
