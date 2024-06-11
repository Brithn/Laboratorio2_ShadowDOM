class MyServiceBox extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'description', 'button-text', 'button-link'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
        this.addIntersectionObserver();
    }

    addIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.animateElements();
                }
            });
        }, options);

        observer.observe(this);
    }

    animateElements() {
        const elements = this.shadowRoot.querySelectorAll('.custom-box, .custom-title, .custom-paragraph, .cta-btn');
        elements.forEach((el) => {
            el.classList.add('animate');
        });
    }

    getAttributeOrDefault(attributeName, defaultValue = '') {
        return this.getAttribute(attributeName) || defaultValue;
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        const title = this.getAttributeOrDefault('title');
        const description = this.getAttributeOrDefault('description');
        const buttonText = this.getAttributeOrDefault('button-text', 'Contrátanos');
        const buttonLink = this.getAttributeOrDefault('button-link', '#');

        return `
        <div class="custom-box">
            <h1 class="custom-title">${title}</h1>
            <p class="custom-paragraph">${description}</p>
            <a href="${buttonLink}" class="cta-btn">${buttonText}</a>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            :host {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: 20px;
                box-sizing: border-box;
            }
            .custom-box {
                background-color: #000000;
                border: 1px solid #27a776;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 40px;
                border-radius: 10px;
                max-width: 800px;
                width: 100%;
                text-align: center;
                opacity: 0;
                transform: translateY(50px);
                transition: all 0.3s ease;
            }
            .custom-box.animate {
                animation: fadeInUp 1s ease-out forwards;
            }
            .custom-box:hover {
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(45px) scale(1.05);
                transition: transform 0.5s, box-shadow 0.5s;
            }
            .custom-title {
                font-size: 36px;
                color: #ffffff;
                font-family: 'Poppins', sans-serif;
                margin-bottom: 20px;
                text-transform: uppercase;
                letter-spacing: 2px;
                opacity: 0;
            }
            .custom-title.animate {
                animation: fadeInLeft 1s ease-out forwards;
            }
            .custom-paragraph {
                font-size: 18px;
                color: #ffffff;
                line-height: 1.6;
                margin-top: 20px;
                margin-bottom: 20px;
                font-family: 'Poppins', sans-serif;
                opacity: 0;
            }
            .custom-paragraph.animate {
                animation: fadeIn 1s ease-in-out forwards;
                animation-delay: 0.5s;
            }
            .cta-btn {
                font-family: 'Poppins', sans-serif;
                text-decoration: none;
                color: #ffffff;
                background-color: #27a776;
                padding: 10px 20px;
                border: 2px solid #27a776;
                border-radius: 5px;
                transition: all 0.3s ease;
                display: inline-block;
                margin-top: 20px;
                opacity: 0;
            }
            .cta-btn.animate {
                animation: fadeInRight 1s ease-out forwards;
                animation-delay: 0.5s;
            }
            .cta-btn:hover {
                background-color: #1f845b;
                border-color: #1f845b;
                transform: scale(1.2);
                transition: background-color 0.3s, transform 0.3s;
            }
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @keyframes fadeInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            @keyframes fadeInRight {
                from {
                    opacity: 0;
                    transform: translateX(50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
        </style>
        `;
    }
}

window.customElements.define('my-service-box', MyServiceBox);
