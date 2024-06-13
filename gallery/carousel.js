export class Carousel extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.images = [];
      this.currentImageIndex = 0;
      this.interval = null;
      this.intervalTime = 3000;
      this.slideWidth = 0;
      this.imageHeight = 400;
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
          width: ${this.slideWidth}px;
          height: ${this.imageHeight}px;
          margin: 0 auto;
        }
        .carousel-slide {
          display: flex;
          transition: transform 0.5s ease-in-out;
          width: ${totalWidth}px;
          height: ${this.imageHeight}px;
        }
        .carousel-slide img {
          width: ${this.slideWidth}px;
          height: ${this.imageHeight}px;
          object-fit: cover;
          border-radius: 1%; /* Ajusta el borde redondeado de las imágenes */
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
      clearInterval(this.interval);
  }
}

customElements.define('image-carousel', Carousel);
