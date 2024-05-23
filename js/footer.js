class TestimonialsSlider extends HTMLElement {
    connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
      <style>
        .slider-container {
          width: 900px;
          height: 400px;
          margin: 50px auto;
          overflow: hidden;
          background-color: #222;
          border-radius: 15px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          padding: 30px;
        }

        .slide {
          display: flex;
          align-items: center; /* Centrar verticalmente */
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .slide.active {
          transform: translateX(0);
        }

        .slide-inner { /* Nuevo contenedor para el contenido */
          display: flex;
          flex-direction: column; /* Apilar elementos verticalmente */
          align-items: flex-start;
          min-height: 100%; /* Asegurar altura mínima */
          padding: 20px;
          background-color: rgba(0, 0, 0, 0.1); /* Fondo semi-transparente */
          border-radius: 10px;
        }

        .slide img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-right: 20px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .slide h1 {
          font-size: 24px;
          color: #fff;
          margin-bottom: 10px; /* Más espacio entre título y texto */
        }

        .slide p {
          font-size: 18px;
          line-height: 1.6;
          color: #ddd;
        }
      </style>
      <div class="slider-container">
        <div class="slide active">
          <div class="slide-inner">
            <img src="img/steven.jpg" alt="Testimonio 1">
            <h1>Steven Floril</h1>
            <p>"Programación Integrativa de Componentes Web es un curso que ha superado mis expectativas. Los profesores son excelentes y el contenido es muy práctico."</p>
          </div>
        </div>
        <div class="slide">
          <div class="slide-inner">
            <img src="img/brithney.png" alt="Testimonio 2">
            <h1>Brithney Salazar</h1>
            <p>"Estoy muy contenta con este curso. He aprendido mucho sobre componentes web y he podido aplicar mis conocimientos en proyectos reales."</p>
          </div>
        </div>
        <div class="slide">
          <div class="slide-inner">
            <img src="img/kiara.jpg" alt="Testimonio 3">
            <h1>Kiara Carvajal</h1>
            <p>"Recomiendo este curso a todos los que quieran mejorar sus habilidades en desarrollo web. Es una inversión que vale la pena."</p>
          </div>
        </div>
        <div class="slide">
          <div class="slide-inner">
            <img src="img/mishell.jpg" alt="Testimonio 4">
            <h1>Mishell Castellano</h1>
            <p>"Gracias a este curso, he podido conseguir un nuevo trabajo como desarrollador front-end. ¡Estoy muy agradecido!"</p>
          </div>
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
  
      // Automatizar el deslizamiento cada 5 segundos (opcional)
      setInterval(nextSlide, 3000); 
    }
  }
  
  customElements.define('testimonials-slider', TestimonialsSlider);
  