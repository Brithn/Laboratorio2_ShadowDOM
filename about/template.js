class ScrollTopButton extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      let shadowRoot = this.attachShadow({ mode: 'open' });
      const template = document.querySelector('#scrollTopBtn');
      const instance = template.content.cloneNode(true);
      shadowRoot.appendChild(instance);
      
      this.scrollButton = shadowRoot.querySelector('.scroll-top');
      window.addEventListener('scroll', this.toggleButton.bind(this));
      this.scrollButton.addEventListener('click', this.scrollToTop.bind(this));
    }
    toggleButton() {
      if (window.scrollY > 100) {
        this.scrollButton.classList.add('active');
      } else {
        this.scrollButton.classList.remove('active');
      }
    }
    scrollToTop(event) {
      event.preventDefault(); 
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  window.customElements.define('scroll-top-button', ScrollTopButton);

