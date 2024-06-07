class MyCard extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    getAttributeOrDefault(attributeName, defaultValue = '') {
        return this.getAttribute(attributeName) || defaultValue;
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        const title = this.getAttributeOrDefault('title');
        const description = this.getAttributeOrDefault('description');
        const image = this.getAttributeOrDefault('image');
        
        return `
        <div class="card">
            <h2>${title}</h2>
            <p>${description}</p>
            <img src="${image}" alt="Card Image">
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            .card {
                border: 1px solid #ddd;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
                max-width: 300px;
                text-align: center;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                background-color: #fff;
                margin: 10px; /* Añade un margen para separarlas */
                animation: fadeInUp 0.6s ease-out;
            }
            .card h2 {
                font-size: 1.5em;
                margin-bottom: 10px;
                font-family: 'Poppins', sans-serif;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #222;
                transition: color 0.3s ease;
            }
            .card p {
                font-size: 1em;
                color: #555;
                font-family: 'Poppins', sans-serif;
                margin-bottom: 20px;
                transition: color 0.3s ease;
            }
            .card img {
                width: 300px;
                height: 300px;
                object-fit: cover;
                border-radius: 5px;
                transition: transform 0.3s ease;
            }
            .card:hover {
                transform: scale(1.05);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
            .card:hover h2, .card:hover p {
                color: green;
            }
            .card:hover img {
                transform: scale(1.1);
            }
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('my-card', MyCard);
