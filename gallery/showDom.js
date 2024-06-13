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
        if (!this.hasAttribute(key)) {
          this.setAttribute(key, '');
        }
      });
    }
  
    render() {
      const quote = this.getAttribute('quote');
      const image = this.getAttribute('image');
      const name = this.getAttribute('name');
      const title = this.getAttribute('title');
  
      this.shadowDOM.innerHTML = `
        <style>
          :host {
            font-family: Arial, sans-serif;
            display: block;
          }
          .testimonial {
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 0.5rem;
            background-color: #f9f9f9;
          }
          .quote {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: #333;
          }
          .author {
            display: flex;
            align-items: center;
          }
          .author img {
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-right: 1rem;
          }
          .author-info h4 {
            margin: 0;
            font-size: 1rem;
            color: #555;
          }
          .author-info p {
            margin: 0;
            color: #777;
          }
        </style>
        <section class="testimonial">
          <p class="quote">"${quote}"</p>
          <div class="author">
            <img src="${image}" alt="${name}">
            <div class="author-info">
              <h4>${name}</h4>
              <p>${title}</p>
            </div>
          </div>
        </section>
      `;
    }
  
    disconnectedCallback() {
      this.remove();
    }
  }
  
  customElements.define('testimonial-section', TestimonialSection);
  