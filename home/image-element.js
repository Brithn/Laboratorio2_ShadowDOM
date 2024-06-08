// document.addEventListener('DOMContentLoaded', () => {
//     class ImageCardElement extends HTMLElement {
//         constructor() {
//             super();
//             this.attachShadow({ mode: 'open' });
//         }

//         static get observedAttributes() {
//             return ['img-src', 'title', 'description', 'href'];
//         }

//         attributeChangedCallback() {
//             this.render();
//         }

//         connectedCallback() {
//             this.render();
//         }

//         render() {
//             this.shadowRoot.innerHTML = `
//                 <style>
//                     .galeria {
//                         position: relative;
//                         overflow: hidden;
//                         padding: 1%;
//                         padding-top: .65rem;
//                         padding-right: .75rem;
//                     }
//                     .galeria img {
//                         width: 300px;
//                         height: 300px;
//                         object-fit: cover;
//                         margin: 10px;
//                         border-radius: 10px;
//                         transition: all 500ms ease-out;
//                     }
//                     .overlay {
//                         position: absolute;
//                         top: 0;
//                         left: 0;
//                         width: 100%;
//                         height: 100%;
//                         background: rgba(0, 0, 0, 0.5);
//                         opacity: 0;
//                         transition: opacity 0.5s ease-out;
//                         border-radius: 10px;
//                     }
//                     .galeria:hover img {
//                         transform: scale(1.1);
//                     }
//                     .galeria:hover .overlay {
//                         opacity: 1;
//                     }
//                     .icon {
//                         position: absolute;
//                         top: 50%;
//                         left: 50%;
//                         transform: translate(-50%, -50%);
//                         font-size: 30px;
//                         color: white;
//                         opacity: 0;
//                         transition: opacity 0.3s ease;
//                     }
//                     .galeria:hover .icon {
//                         opacity: 1;
//                     }
//                 </style>
//                 <div class="galeria">
//                     <a href="${this.getAttribute('href')}" target="_blank">
//                         <img src="${this.getAttribute('img-src')}" alt="Image">
//                         <div class="overlay"></div>
//                     </a>
//                 </div>
//             `;
//         }
//     }

//     customElements.define('image-card', ImageCardElement);
// });
// scripts/image-card-element.js
export class ImageCardElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['img-src', 'title', 'description', 'href'];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .galeria {
                    position: relative;
                    overflow: hidden;
                    padding: 1%;
                    padding-top: .65rem;
                    padding-right: .75rem;
                }
                .galeria img {
                    width: 300px;
                    height: 300px;
                    object-fit: cover;
                    margin: 10px;
                    border-radius: 10px;
                    transition: all 500ms ease-out;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    opacity: 0;
                    transition: opacity 0.5s ease-out;
                    border-radius: 10px;
                }
                .galeria:hover img {
                    transform: scale(1.1);
                }
                .galeria:hover .overlay {
                    opacity: 1;
                }
                .icon {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: 30px;
                    color: white;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .galeria:hover .icon {
                    opacity: 1;
                }
            </style>
            <div class="galeria">
                <a href="${this.getAttribute('href')}" target="_blank">
                    <img src="${this.getAttribute('img-src')}" alt="Image">
                    <div class="overlay"></div>
                </a>
            </div>
        `;
    }
}

customElements.define('image-card', ImageCardElement);
