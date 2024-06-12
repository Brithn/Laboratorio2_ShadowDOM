class AboutSection extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.mapComponentAttributes();
    this.render();
  }

  mapComponentAttributes() {
    const attributeMapping = [
      'image', 'heading', 'birthday', 'website', 'phone', 'city', 
      'age', 'degree', 'email', 'freelance', 'paragraph1', 'paragraph2', 'paragraph3'
    ];
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

      <section id="about" class="about section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4">
              <img src="${this.attributes.image.value}" class="img-fluid" alt="" id="profile-picture">
            </div>
            <div class="col-lg-6 content">
              <h2 class="bounce">${this.attributes.heading.value}</h2>
              <p class="py-3 bounce">${this.attributes.paragraph1.value}</p>
              <div class="row">
                <div class="col-lg-6">
                  <ul class="bounce">
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Cumpleaños:</strong> <span>${this.attributes.birthday.value}</span></li>
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Web:</strong> <span>${this.attributes.website.value}</span></li>
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Teléfono:</strong> <span>${this.attributes.phone.value}</span></li>
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Ciudad:</strong> <span>${this.attributes.city.value}</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul  class="bounce">
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Edad:</strong> <span>${this.attributes.age.value}</span></li>
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Titulo:</strong> <span>${this.attributes.degree.value}</span></li>
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Email:</strong> <span>${this.attributes.email.value}</span></li>
                    <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Independiente:</strong> <span>${this.attributes.freelance.value}</span></li>
                  </ul>
                </div>
              </div>
              <p class="m-0 bounce">${this.attributes.paragraph3.value}</p>
              <p class="m-0 bounce">${this.attributes.paragraph2.value}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  templateCss() {
    return `
      <style>
        :root { 
          --background-color: #000000; 
          --default-color: #fafafa;
          --heading-color: #ffffff; 
          --accent-color: #27a776; 
          --contrast-color: #161718; 
        }

        section,
        .section {
          color: var(--default-color);
          background-color: var(--background-color);
          padding: 60px 0;
          scroll-margin-top: 100px;
          overflow: clip;
        }

        @media (max-width: 1199px) {
          section,
          .section {
            scroll-margin-top: 66px;
          }
        }

        @media (min-width: 992px) {
          .col-lg-6 {
            flex: 0 0 auto;
            width: 50%;
          }
        }

        .about .content h2 {
          font-weight: 700;
          font-size: 24px; 
          margin-left: 0%; 
          transition: margin-left 0.5s ease-in-out; 
        }
        
        .about img {
          margin-bottom: 15px;
          max-height: auto;
          max-width: 90%;
          margin-left: 10%;
          transition: transform 0.3s ease; /* Transición para la transformación */
        }
        
        .about img:hover {
          transform: scale(1.05); /* Agrandar la imagen al pasar el cursor sobre ella */
        }

        .about p {
          padding: 10px;
          transition: background-color 0.5s ease; /* Transición para el cambio de color de fondo */
        }

        .about .content ul {
          list-style: none;
          padding: 0;
        }

        .about .content ul li {
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          transition: background-color 0.5s ease; /* Transición para el cambio de color de fondo */
        }

        .about .content ul strong {
          margin-right: 10px;
        }

        .about .content ul i {
          font-size: 16px;
          margin-right: 5px;
          color: var(--accent-color);
          line-height: 0;
        }
        /* Animación de rebote */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px); /* Cambiar el valor de la altura del rebote */
          }
          60% {
            transform: translateY(-3px); /* Cambiar el valor de la altura del rebote */
          }
        }
        
        .bounce {
          transition: transform 0.3s ease; /* Transición suave */
        }
        
        .bounce:hover {
          animation: bounce 1s infinite; /* Aplicando la animación de rebote al pasar el cursor */
        }
        

      </style>
    `;
  }

  addMouseOverEvents() {
    const paragraphs = this.shadowDOM.querySelectorAll('p');
    const headings = this.shadowDOM.querySelectorAll('h2');
    const listItems = this.shadowDOM.querySelectorAll('li');

    paragraphs.forEach(paragraph => {
      paragraph.addEventListener('mouseover', () => {
        paragraph.classList.add('bounce');
      });
      paragraph.addEventListener('mouseout', () => {
        paragraph.classList.remove('bounce');
      });
    });

    headings.forEach(heading => {
      heading.addEventListener('mouseover', () => {
        heading.classList.add('bounce');
      });
      heading.addEventListener('mouseout', () => {
        heading.classList.remove('bounce');
      });
    });

    listItems.forEach(listItem => {
      listItem.addEventListener('mouseover', () => {
        listItem.classList.add('bounce');
      });
      listItem.addEventListener('mouseout', () => {
        listItem.classList.remove('bounce');
      });
    });
  }

  disconnectedCallback() {
    this.remove();
  }
}

customElements.define('about-section', AboutSection);

