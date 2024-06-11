// customElement.js
class PortfolioDetails extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      const title = this.getAttribute('title');
      const paragraphs = this.getAttribute('paragraphs').split('|');
      const quote = this.getAttribute('quote');
      const author = this.getAttribute('author');
  
      this.shadowRoot.innerHTML = `
        <style>
          /* Agrega tus estilos aquí */
        </style>
        <div>
          <h2>${title}</h2>
          ${paragraphs.map(p => `<p>${p}</p>`).join('')}
          <blockquote>
            <p>${quote}</p>
            <cite>${author}</cite>
          </blockquote>
        </div>
      `;
    }
  }
  
  customElements.define('portfolio-details', PortfolioDetails);