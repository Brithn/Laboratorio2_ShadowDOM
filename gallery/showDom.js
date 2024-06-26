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
            display: block;
            padding: 2rem; /* Añade espacio alrededor del componente */
            box-sizing: border-box;
            text-align: center;
            justify-content: center;
            align-items: center;
          }
          .testimonial {
            padding: 1rem;
            border: 1px solid #ddd;
            border-radius: 0.5rem;
            background-color: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
            transition: box-shadow 0.3s ease; /* Transición suave */
            text-align: center;
            max-width: 70%; /* Ajusta el ancho máximo */
            margin: 0 auto; /* Centra el elemento */
          }

            .testimonial img {
            width: 60px; /* Ajusta el tamaño de la imagen según sea necesario */
            height: 50px;
            border-radius: 50%; /* Forma circular para la imagen */
            margin-right: 0.5rem; /* Espaciado entre la imagen y el texto */
}
          .quote {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: #000;
          }
          .author {
            display: flex;
            align-items: center;
            text-align: center;
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
            color: #000;
          }
          .author-info p {
            margin: 0;
            color: #000;
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
