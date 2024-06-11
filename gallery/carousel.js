class ImageCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initCarousel();
    }

    render() {
        const images = [
            { src: 'Imagen1.jpg', alt: 'Gallery Image 1' },
            { src: 'Imagen2.jpg', alt: 'Gallery Image 2' },
            { src: 'Imagen3.jpg', alt: 'Gallery Image 3' }
        ];

        const imageElements = images.map(image => `<img src="${image.src}" alt="${image.alt}">`).join('');

        this.shadowRoot.innerHTML = `
           <style>
                :host {
                    display: block;
                    position: relative;
                    width: 60%;
                    margin: 0 auto; 
                    overflow: hidden;
                    border-radius: 10px; 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
                }
                .carousel {
                    display: flex;
                    transition: transform 0.5s ease;
                }
                .carousel img {
                    width: 100%;
                    flex-shrink: 0;
                    border-radius: 10px;
                }
                .controls {
                    position: absolute;
                    top: 50%;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    transform: translateY(-50%);
                }
                .control {
                    background: rgba(0, 0, 0, 0.5);
                    color: white;
                    padding: 10px;
                    cursor: pointer;
                    border-radius: 50%;
                }
                .control:hover {
                    background: rgba(0, 0, 0, 0.7);
                }
                .control.prev {
                    margin-left: 10px;
                }
                .control.next {
                    margin-right: 10px;
                }
            </style>
            <div class="carousel">
                ${imageElements}
            </div>
            <div class="controls">
                <div class="control prev">❮</div>
                <div class="control next">❯</div>
            </div>
        `;
    }

    initCarousel() {
        const carousel = this.shadowRoot.querySelector('.carousel');
        const images = this.shadowRoot.querySelectorAll('img');
        let index = 0;

        const updateCarousel = () => {
            const width = this.clientWidth;
            carousel.style.transform = `translateX(-${index * width}px)`;
        };

        const showNext = () => {
            index = (index + 1) % images.length;
            updateCarousel();
        };

        const showPrev = () => {
            index = (index - 1 + images.length) % images.length;
            updateCarousel();
        };

        this.shadowRoot.querySelector('.next').addEventListener('click', showNext);
        this.shadowRoot.querySelector('.prev').addEventListener('click', showPrev);

        // Update the carousel width when the window is resized
        window.addEventListener('resize', updateCarousel);

        // Initialize the carousel position
        updateCarousel();
    }
}

customElements.define('image-carousel', ImageCarousel);
