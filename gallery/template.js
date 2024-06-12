class TemplateSection extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.getElementById('portfolioDetailsTemplate');
        const templateContent = template.content.cloneNode(true);

        this.shadowDOM.appendChild(templateContent);
    }

    disconnectedCallback() {
        this.remove();
    }
}

customElements.define('template-section', TemplateSection);
