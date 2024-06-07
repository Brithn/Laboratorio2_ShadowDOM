class MyServiceBox extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.addAnimation();
    }

    getAttributeOrDefault(attributeName, defaultValue = '') {
        return this.getAttribute(attributeName) || defaultValue;
    }

    render() {
        this.innerHTML = `
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
            <p class="custom-paragraph" id="animated-text">${description}</p>
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
            }
            .custom-box {
                background-color: #f9f9f9;
                border: 1px solid #ddd;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 40px;
                border-radius: 10px;
                max-width: 800px;
                width: 100%;
                text-align: center;
                transform: translateY(50px);
                opacity: 0;
                animation: fadeInUp 1s ease-out forwards;
                transition: all 0.3s ease;
            }
            .custom-box:hover {
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
                transform: translateY(45px);
            }
            .custom-title {
                font-size: 36px;
                color: #333;
                font-family: 'Poppins', sans-serif;
                margin-bottom: 20px;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .custom-paragraph {
                font-size: 18px;
                color: #555;
                line-height: 1.6;
                margin-top: 20px;
                margin-bottom: 20px;
                font-family: 'Poppins', sans-serif;
                opacity: 0;
                animation: fadeIn 1s ease-in-out forwards;
                animation-delay: 0.5s;
            }
            .cta-btn {
                font-family: 'Poppins', sans-serif;
                text-decoration: none;
                color: #fff;
                background-color: #207319;
                padding: 10px 20px;
                border: 2px solid #207319;
                border-radius: 5px;
                transition: all 0.3s ease;
                display: inline-block;
                margin-top: 20px;
            }
            .cta-btn:hover {
                background-color: #185a14;
                border-color: #185a14;
                transform: scale(1.1);
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
        </style>
        `;
    }

    addAnimation() {
        const paragraph = this.querySelector("#animated-text");
        setTimeout(() => {
            paragraph.style.opacity = 1;
        }, 500); // Espera 500 ms antes de iniciar la animación
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('my-service-box', MyServiceBox);
