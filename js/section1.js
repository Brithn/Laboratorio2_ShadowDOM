class IntroElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
          
        `;
    }
}
customElements.define('intro-element', IntroElement);