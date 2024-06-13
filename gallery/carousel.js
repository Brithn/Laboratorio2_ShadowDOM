// carousel.js

export class Carousel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.images = [];
      this.currentImageIndex = 0;
      this.interval = null;
      this.intervalTime = 3000; // Tiempo en milisegundos entre cada cambio automático
      this.slideWidth = 0;
      this.imageHeight = 700; // Altura deseada para las imágenes
    }
  
    connectedCallback() {
      this.images = Array.from(this.querySelectorAll('img'));
      this.render();
      this.attachEvents();
      this.startAutoSlide();
    }
  
    render() {
      this.slideWidth = this.images[0].width;
      const totalWidth = this.images.length * this.slideWidth;
  
      this.shadowRoot.innerHTML = `
        <style>
          .carousel-container {
            position: relative;
            overflow: hidden;
            width: ${this.slideWidth}px; /* Ajustamos el ancho del contenedor al ancho de la imagen */
            height: ${this.imageHeight}px; /* Ajustamos la altura del contenedor según la altura deseada */
            margin: 0 auto; /* Centramos horizontalmente el carrusel */
          }
          .carousel-slide {
            display: flex;
            transition: transform 0.5s ease-in-out;
            width: ${totalWidth}px; /* Ancho total del carrusel igual al ancho total de las imágenes */
            height: ${this.imageHeight}px; /* Altura del carrusel según la altura deseada de las imágenes */
            overflow: hidden; /* Ocultamos cualquier desbordamiento */
          }
          .carousel-slide img {
            width: ${this.slideWidth}px; /* Ajustamos el ancho de las imágenes */
            height: ${this.imageHeight}px; /* Ajustamos la altura de las imágenes */
            object-fit: cover; /* Mantenemos la relación de aspecto y recortamos si es necesario */
          }
        </style>
        <div class="carousel-container">
          <div class="carousel-slide">
            ${this.images.map(img => `<img src="${img.src}" alt="${img.alt}">`).join('')}
          </div>
        </div>
      `;
    }
  
    attachEvents() {
      // No necesitamos eventos de botones para desplazamiento manual
    }
  
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, this.intervalTime);
    }
  
    nextSlide() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      const slideContainer = this.shadowRoot.querySelector('.carousel-slide');
      slideContainer.style.transform = `translateX(-${this.currentImageIndex * this.slideWidth}px)`;
    }
  
    disconnectedCallback() {
      clearInterval(this.interval); // Limpiar intervalo cuando el componente se desconecta
    }
  }
  
  customElements.define('image-carousel', Carousel);
  