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
            <a href="${buttonLink}" class="cta-btn">${buttonText}<br></a>
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
                background-color: #f9f9f9; /* Cambia esto al color que prefieras */
                border: 1px solid #ddd;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 40px;
                border-radius: 10px;
                max-width: 800px; /* Establece el ancho máximo del cuadro */
                width: 100%; /* Asegura que el cuadro no se haga más pequeño que su contenido */
                text-align: center;
            }
            .custom-title {
                font-size: 36px;
                color: #222; /* Cambia esto al color que prefieras */
                font-family: 'Poppins', sans-serif;
                margin-bottom: 20px;
                text-transform: uppercase;
                letter-spacing: 2px;
                animation: fadeIn 1s ease-in-out;
            }
            .custom-paragraph {
                font-size: 18px;
                color: #555; /* Cambia esto al color que prefieras */
                line-height: 1.6;
                margin-top: 20px;
                margin-bottom: 20px;
                font-family: 'Poppins', sans-serif;
                opacity: 0;
                transition: opacity 1s ease-in-out;
            }
            .cta-btn {
                font-family: 'Poppins', sans-serif;
                text-decoration: none;
                color: #207319; /* Cambia esto al color que prefieras */
                padding: 10px 20px;
                border: 2px solid #207319;
                border-radius: 5px;
                transition: all 0.3s ease; /* Añade transición para la animación */
                display: inline-block;
                margin-top: 20px;
            }
            .cta-btn:hover {
                background-color: #207319;
                color: #fff;
                transform: scale(1.1); /* Aumenta ligeramente el tamaño del botón */
            }
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        </style>
        `;
    }

    addAnimation() {
        const paragraph = this.shadowDOM.getElementById("animated-text");
        setTimeout(() => {
            paragraph.style.opacity = 1;
        }, 500); // Espera 500 ms antes de iniciar la animación
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('my-service-box', MyServiceBox);
