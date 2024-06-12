class TestimonialCarousel extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.initCarousel();
    }
  
    render() {
      const testimonialElements = Array.from(this.children);
      const testimonials = testimonialElements.map(testimonial => ({
        img: testimonial.getAttribute('img'),
        name: testimonial.getAttribute('name'),
        title: testimonial.getAttribute('title'),
        text: testimonial.getAttribute('text')
      }));
  
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css">
        <link rel="stylesheet" href="styleCarru.css">
        <div class="gtco-testimonials">
          <div class="owl-carousel owl-carousel1 owl-theme">
            ${testimonials.map(testimonial => `
              <div class="card text-center">
                <img class="card-img-top" src="${testimonial.img}" alt="">
                <div class="card-body">
                  <h5>${testimonial.name}<br />
                    <span>${testimonial.title}</span>
                  </h5>
                  <p class="card-text">${testimonial.text}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      `;
    }
  
    initCarousel() {
      $(this.shadowRoot.querySelector('.owl-carousel1')).owlCarousel({
        loop: true,
        center: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
          0: {
            items: 1,
            nav: false
          },
          680: {
            items: 2,
            nav: false,
            loop: false
          },
          1000: {
            items: 3,
            nav: true
          }
        }
      });
    }
  }
  
  class TestimonialItem extends HTMLElement {
    constructor() {
      super();
    }
  }
  
  customElements.define('testimonial-carousel', TestimonialCarousel);
  customElements.define('testimonial-item', TestimonialItem);
  