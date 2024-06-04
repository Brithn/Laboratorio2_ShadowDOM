
class ElementoTitulo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                .titulo {
                    text-align: center;
                    padding: 50px 20px;
                }
                .titulo h1 {
                    font-size: 2em;
                    color: #00b894;
                }
                .titulo p {
                    font-size: 1.2em;
                    margin: 20px 0;
                    max-width: 600px; 
                    line-height: 1.5;
                    text-align: center;
                    margin: 0 auto;

                }
                .titulo button {
                    padding: 10px 20px;
                    font-size: 1em;
                    color: #fff;
                    background-color: #00b894;
                    border: none;
                    cursor: pointer;
                    margin-top: 20px;
                }
            </style>
            <div class="titulo">
                <h1><span style="color: #00b894;">Capturando Momentos</h1>
                <container>
                <row>
                <p>Somos apasionados de la fotografía y estamos dedicados 
                a capturar tus momentos más preciados con arte y profesionalismo.
                 Navega por nuestra galería para ver nuestras obras y descubre
                  cómo podemos transformar tus instantes especiales en recuerdos
                   eternos. </p>
                <button>GALERIA</button>
                </row>
                </container>
            </div>
        `;
        }
    }
customElements.define('elemento-titulo',ElementoTitulo);

