class CustomSectionTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          --background-color: #000000; 
          --default-color: #fafafa; 
          --heading-color: #ffffff; 
          --accent-color: #27a776; 
          --contrast-color: #161718;
        }
        .container {
          color: var(--default-color);
          background-color: var(--background-color);
          font-family: var(--default-font);
        }
        .section-title {
          padding-bottom: 60px;
          position: relative;
        }
        .section-title h2 {
          font-size: 14px;
          font-weight: 400;
          padding: 10px;
          line-height: 1px;
          margin: 0;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: color-mix(in srgb, var(--default-color), transparent 50%);
          position: relative;
          font-family: var(--default-font);
        }
        .section-title h2::after {
          content: "";
          width: 120px;
          height: 1px;
          display: inline-block;
          background: var(--accent-color);
          margin: 4px 10px;
        }
        .section-title p {
          color: var(--heading-color);
          margin: 0;
          font-size: 36px;
          font-weight: 400;
          font-family: var(--heading-font);
          margin-right: 20px;
        }
      </style>
      <div class="container section-title" data-aos="fade-up">
        <h2></h2>
        <p></p>
      </div>
    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['heading', 'subheading'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'heading') {
      this.shadowRoot.querySelector('h2').textContent = newValue;
    }
    if (name === 'subheading') {
      this.shadowRoot.querySelector('p').textContent = newValue;
    }
  }
}

customElements.define('custom-section-title', CustomSectionTitle);