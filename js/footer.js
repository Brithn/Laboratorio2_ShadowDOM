class footerTest extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
      <style>
        .slider-container {
          width: 600px; 
          height: 540px; 
          margin: 50px auto;
          overflow: hidden;
          background-color: #000; 
          border-radius: 10px; 
          padding: 20px; 
        }

        .slide {
          display: flex;
          align-items: center;
          width: 100%;
          transition: transform 0.5s ease-in-out;
        }

        .slide img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 20px;
          border: 3px solid #fff; 
        }

        .slide p {
          font-size: 16px;
          line-height: 1.5;
          color: #fff; 
          text-shadow: 1px 1px 2px #000; 
        }
      </style>
      <div class="slider-container">
        <div class="slide">
          <img src="img/steven.jpg" alt="Testimonio 1">
          <h1>Steven Floril</h1>
          <p>"Programación Integrativa de Componentes Web</p>
        </div>
        <div class="slide">
          <img src="img/brithney.png" alt="Testimonio 2">
          <h1>Brithney Salazar</h1>
          <p>"Programación Integrativa de Componentes Web</p>
        </div>
        <div class="slide">
          <img src="img/kiara.jpg" alt="Testimonio 3">
          <h1>Kiara Carvajal</h1>
          <p>"Programación Integrativa de Componentes Web</p>
        </div>
        <div class="slide">
          <img src="img/mishell.jpg" alt="Testimonio 4">
          <h1>Mishell Castellano</h1>
          <p>"Programación Integrativa de Componentes Web</p>
        </div>
      </div>
    `;

    const slides = shadowRoot.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      updateSlidePositions();
    }

    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      updateSlidePositions();
    }

    function updateSlidePositions() {
      slides.forEach((slide, index) => {
        const translateX = (index - currentSlide) * 100; 
        slide.style.transform = `translateX(${translateX}%)`;
      });
    }

    setInterval(nextSlide, 3000); 
  }
}

customElements.define('footer-test', footerTest);