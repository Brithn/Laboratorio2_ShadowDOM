
//Custom Element
class PresentationElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        
        const headingText = this.getAttribute('heading-text') || 'Título';
        const subheadingText = this.getAttribute('subheading-text') || 'Subtítulo';
        const descriptionText = this.getAttribute('description-text') || 'Descripción';
        const buttonText = this.getAttribute('button-text') || 'Botón';
        const buttonHref = this.getAttribute('button-href') || '#';

        this.innerHTML = `
            <style>
                .presentation {
                    text-align: center;
                    padding: 50px 20px;
                    color: var(--presentation-text-color, #fff);
                    background-color: var(--presentation-bg-color, #000);
                }
                .presentation h1 {
                    font-size: 2.5em;
                    margin: 0;
                    position: relative;
                    display: inline-block;
                }
                .underlight::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    left: 0;
                    padding: 0.5px;
                    bottom: 0;
                    height: 4px;
                    background-color: #27a776;
                    transform: scalex(0);
                    transform-origin: bottom right;
                    transition: transform 0.6s ease-out;
                }
                .underlight:hover::after {
                    transform: scalex(1);
                    transform-origin: bottom left;
                }

                .presentation h2 {
                    font-size: 2em;
                    margin: 10px 0;
                    color: var(--presentation-subheading-color, #fff);
                }
                
                .presentation p {
                    font-size: 1.2em;
                    margin: 20px 0;
                    color: var(--presentation-text-color, #fff);
                }
                .cta-button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: var(--button-bg-color, #27a776);
                    color: var(--button-text-color, #fff);
                    text-decoration: none;
                    font-size: 1.2em;
                    border-radius: 5px;
                }
                .cta-button:hover {
                    background-color: var(--button-hover-color, #218838);
                }
            </style>

            <div class="presentation">
                <br>
                <h1 class="underlight">${headingText}</h1>
                <h2>${subheadingText}</h2>
                <p>${descriptionText}</p>
                <a class="cta-button" href="${buttonHref}">${buttonText}</a>
            </div>
        `;
    }
}

customElements.define('presentation-element', PresentationElement);
