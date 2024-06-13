class TestimonialSection extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.mapComponentAttributes();
    this.render();
  }

  mapComponentAttributes() {
    const attributeMapping = ['quote', 'image', 'name', 'title'];
    attributeMapping.forEach(key => {
      if (!this.attributes[key]) {
        this.attributes[key] = { value: '' };
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
      <section class="testimonial">
        <p class="quote">"${this.attributes.quote.value}"</p>
        <div class="author">
          <img src="${this.attributes.image.value}" alt="${this.attributes.name.value}">
          <div class="author-info">
            <h4>${this.attributes.name.value}</h4>
            <p>${this.attributes.title.value}</p>
          </div>
        </div>
      </section>
    `;
  }

  templateCss() {
    return `
      <style>
        .testimonial {
          font-family: Arial, sans-serif;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
          background-color: #f9f9f9;
        }
        .testimonial .quote {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #333;
        }
        .testimonial .author {
          display: flex;
          align-items: center;
        }
        .testimonial .author img {
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-right: 1rem;
        }
        .testimonial .author-info h4 {
          margin: 0;
          font-size: 1rem;
          color: #555;
        }
        .testimonial .author-info p {
          margin: 0;
          color: #777;
        }
      </style>
    `;
  }

  disconnectedCallback() {
    this.remove();
  }
}

customElements.define('testimonial-section', TestimonialSection);
