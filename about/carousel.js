// carousel.js
class TestimonialsCarousel extends HTMLElement {
    connectedCallback() {
        this.slides = this.querySelectorAll('testimonial-slide');
        this.currentIndex = 0;
        this.showSlide(this.currentIndex);
        this.startAutoSlide();
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    startAutoSlide() {
        this.interval = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.showSlide(this.currentIndex);
        }, 3000);
    }

    stopAutoSlide() {
        clearInterval(this.interval);
    }
}

customElements.define('testimonials-carousel', TestimonialsCarousel);

class TestimonialSlide extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const text = this.getAttribute('text');
        const author = this.getAttribute('author');
        const image = this.getAttribute('image');

        this.shadowRoot.innerHTML = `
            <style>
              
                :host {
                    display: none;
                }
                
                .testimonial {
                    text-align: center;
                    padding: 20px;
                    background-color: #000;
                    border-radius: 0px;
                    max-width: 500px;
                    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
                }
                .testimonial img {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    margin-bottom: 10px;
                }
                .testimonial p {
                    font-size: 1.1em;
                    margin-bottom: 5px;
                    color: #fff;
                }
                .testimonial .author {
                    font-size: 0.9em;
                    color: #fff;
                }
            </style>
            <div class="testimonial">
                <p>"${text}"</p>
                <img src="${image}" alt="Avatar">
                <div class="author">${author}</div>
            </div>
        `;
    }
}

customElements.define('testimonial-slide', TestimonialSlide);
