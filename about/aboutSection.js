const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css">

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
    }
    .about img {
     
      margin-bottom: 15px;
      
    }
    
    .about .content ul {
      list-style: none;
      padding: 0;
    }

    .about .content ul li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
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
  </style>
  <section id="about" class="about section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-4">
          <img class="img-fluid" alt="">
        </div>
        <div class="col-lg-5 content">
          <h2></h2>
          <p class="fst-italic py-3"></p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Cumpleaños:</strong> <span></span></li>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Web:</strong> <span></span></li>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Teléfono:</strong> <span></span></li>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Ciudad:</strong> <span></span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Edad:</strong> <span></span></li>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Titulo:</strong> <span></span></li>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Email:</strong> <span></span></li>
                <li><i class="bi bi-chevron-right icon-verde"></i> <strong>Independiente:</strong> <span></span></li>
              </ul>
            </div>
            <p class="py-3"></p>
          </div>
          <p class="m-0"></p>
        </div>
      </div>
    </div>
  </section>
`;

class AboutSection extends HTMLElement {
  static get observedAttributes() {
    return [
      'image-src', 'heading', 'intro', 'birthday', 'website', 'phone', 'city', 
      'age', 'degree', 'email', 'freelance', 'paragraph1', 'paragraph2'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.updateContent();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.updateContent();
  }

  updateContent() {
    this.shadowRoot.querySelector('img').src = this.getAttribute('image-src') || '';
    this.shadowRoot.querySelector('h2').textContent = this.getAttribute('heading') || '';
    this.shadowRoot.querySelector('.fst-italic').textContent = this.getAttribute('intro') || '';
    this.shadowRoot.querySelector('li:nth-child(1) span').textContent = this.getAttribute('birthday') || '';
    this.shadowRoot.querySelector('li:nth-child(2) span').textContent = this.getAttribute('website') || '';
    this.shadowRoot.querySelector('li:nth-child(3) span').textContent = this.getAttribute('phone') || '';
    this.shadowRoot.querySelector('li:nth-child(4) span').textContent = this.getAttribute('city') || '';
    this.shadowRoot.querySelector('div.col-lg-6:nth-child(2) li:nth-child(1) span').textContent = this.getAttribute('age') || '';
    this.shadowRoot.querySelector('div.col-lg-6:nth-child(2) li:nth-child(2) span').textContent = this.getAttribute('degree') || '';
    this.shadowRoot.querySelector('div.col-lg-6:nth-child(2) li:nth-child(3) span').textContent = this.getAttribute('email') || '';
    this.shadowRoot.querySelector('div.col-lg-6:nth-child(2) li:nth-child(4) span').textContent = this.getAttribute('freelance') || '';
    this.shadowRoot.querySelector('.py-3').textContent = this.getAttribute('paragraph1') || '';
    this.shadowRoot.querySelector('.m-0').textContent = this.getAttribute('paragraph2') || '';
  }
}

customElements.define('about-section', AboutSection);
