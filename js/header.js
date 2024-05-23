document.addEventListener('DOMContentLoaded', () => {
    class HeaderElement extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            
        }

    }
    customElements.define('header-element', HeaderElement);
})